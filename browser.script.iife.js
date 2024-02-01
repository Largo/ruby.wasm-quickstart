/* # Notices for ruby.wasm

This product has binary distribution forms and they may contain third party material from the projects listed below.

## Ruby

https://www.ruby-lang.org/en/

### COPYING

```
Ruby is copyrighted free software by Yukihiro Matsumoto <matz@netlab.jp>.
You can redistribute it and/or modify it under either the terms of the
2-clause BSDL (see the file BSDL), or the conditions below:

1. You may make and give away verbatim copies of the source form of the
   software without restriction, provided that you duplicate all of the
   original copyright notices and associated disclaimers.

2. You may modify your copy of the software in any way, provided that
   you do at least ONE of the following:

   a. place your modifications in the Public Domain or otherwise
      make them Freely Available, such as by posting said
      modifications to Usenet or an equivalent medium, or by allowing
      the author to include your modifications in the software.

   b. use the modified software only within your corporation or
      organization.

   c. give non-standard binaries non-standard names, with
      instructions on where to get the original software distribution.

   d. make other distribution arrangements with the author.

3. You may distribute the software in object code or binary form,
   provided that you do at least ONE of the following:

   a. distribute the binaries and library files of the software,
      together with instructions (in the manual page or equivalent)
      on where to get the original distribution.

   b. accompany the distribution with the machine-readable source of
      the software.

   c. give non-standard binaries non-standard names, with
      instructions on where to get the original software distribution.

   d. make other distribution arrangements with the author.

4. You may modify and include the part of the software into any other
   software (possibly commercial).  But some files in the distribution
   are not written by the author, so that they are not under these terms.

   For the list of those files and their copying conditions, see the
   file LEGAL.

5. The scripts and library files supplied as input to or produced as
   output from the software do not automatically fall under the
   copyright of the software, but belong to whomever generated them,
   and may be sold commercially, and may be aggregated with this
   software.

6. THIS SOFTWARE IS PROVIDED "AS IS" AND WITHOUT ANY EXPRESS OR
   IMPLIED WARRANTIES, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
   WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
   PURPOSE.
```


### LEGAL

```
= LEGAL NOTICE INFORMATION
--------------------------

All the files in this distribution are covered under either the Ruby's
license (see the file COPYING) or public-domain except some files
mentioned below.

[addr2line.c]

  A part of this file is from FreeBSD.

  >>>
    Copyright (c) 1986, 1988, 1991, 1993::
    The Regents of the University of California.  All rights reserved.

    (c) UNIX System Laboratories, Inc.

    All or some portions of this file are derived from material licensed
    to the University of California by American Telephone and Telegraph
    Co. or Unix System Laboratories, Inc. and are reproduced herein with
    the permission of UNIX System Laboratories, Inc.

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:
    1. Redistributions of source code must retain the above copyright
       notice, this list of conditions and the following disclaimer.
    2. Redistributions in binary form must reproduce the above copyright
       notice, this list of conditions and the following disclaimer in the
       documentation and/or other materials provided with the distribution.
    4. Neither the name of the University nor the names of its contributors
       may be used to endorse or promote products derived from this software
       without specific prior written permission.

    THIS SOFTWARE IS PROVIDED BY THE REGENTS AND CONTRIBUTORS ``AS IS'' AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    ARE DISCLAIMED.  IN NO EVENT SHALL THE REGENTS OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
    OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
    HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
    LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
    OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
    SUCH DAMAGE.

	@(#)subr_prf.c	8.3 (Berkeley) 1/21/94


[ccan/build_assert/build_assert.h]
[ccan/check_type/check_type.h]
[ccan/container_of/container_of.h]
[ccan/str/str.h]

  These files are licensed under the {CC0}[https://creativecommons.org/choose/zero/].

[ccan/list/list.h]

  This file is licensed under the {MIT License}[rdoc-label:label-MIT+License].

[coroutine]

  Unless otherwise specified, these files are licensed under the
  {MIT License}[rdoc-label:label-MIT+License].

[include/ruby/onigmo.h]
[include/ruby/oniguruma.h]
[regcomp.c]
[regenc.c]
[regenc.h]
[regerror.c]
[regexec.c]
[regint.h]
[regparse.c]
[regparse.h]
[enc/ascii.c]
[enc/big5.c]
[enc/cp949.c]
[enc/emacs_mule.c]
[enc/encdb.c]
[enc/euc_jp.c]
[enc/euc_kr.c]
[enc/euc_tw.c]
[enc/gb18030.c]
[enc/gb2312.c]
[enc/gbk.c]
[enc/iso_8859_1.c]
[enc/iso_8859_10.c]
[enc/iso_8859_11.c]
[enc/iso_8859_13.c]
[enc/iso_8859_14.c]
[enc/iso_8859_15.c]
[enc/iso_8859_16.c]
[enc/iso_8859_2.c]
[enc/iso_8859_3.c]
[enc/iso_8859_4.c]
[enc/iso_8859_5.c]
[enc/iso_8859_6.c]
[enc/iso_8859_7.c]
[enc/iso_8859_8.c]
[enc/iso_8859_9.c]
[enc/koi8_r.c]
[enc/koi8_u.c]
[enc/shift_jis.c]
[enc/unicode.c]
[enc/us_ascii.c]
[enc/utf_16be.c]
[enc/utf_16le.c]
[enc/utf_32be.c]
[enc/utf_32le.c]
[enc/utf_8.c]
[enc/windows_1251.c]
[enc/windows_31j.c]

  Onigmo (Oniguruma-mod) LICENSE

  >>>
    Copyright (c) 2002-2009::  K.Kosako  <sndgk393 AT ybb DOT ne DOT jp>
    Copyright (c) 2011-2014::  K.Takata  <kentkt AT csc DOT jp>
    All rights reserved.

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:
    1. Redistributions of source code must retain the above copyright
       notice, this list of conditions and the following disclaimer.
    2. Redistributions in binary form must reproduce the above copyright
       notice, this list of conditions and the following disclaimer in the
       documentation and/or other materials provided with the distribution.

    THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
    OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
    HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
    LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
    OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
    SUCH DAMAGE.

  Oniguruma LICENSE

  >>>
    Copyright (c) 2002-2009::  K.Kosako  <sndgk393 AT ybb DOT ne DOT jp>
    All rights reserved.

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:
    1. Redistributions of source code must retain the above copyright
       notice, this list of conditions and the following disclaimer.
    2. Redistributions in binary form must reproduce the above copyright
       notice, this list of conditions and the following disclaimer in the
       documentation and/or other materials provided with the distribution.

    THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
    OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
    HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
    LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
    OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
    SUCH DAMAGE.

  * https://github.com/k-takata/Onigmo/
  * https://github.com/kkos/oniguruma
  * https://svnweb.freebsd.org/ports/head/devel/oniguruma/

    When this software is partly used or it is distributed with Ruby,
    this of Ruby follows the license of Ruby.

[enc/windows_1250.c]
[enc/windows_1252.c]

  >>>
    Copyright (c) 2006-2007::  Byte      <byte AT mail DOT kna DOT ru>
                               K.Kosako  <sndgk393 AT ybb DOT ne DOT jp>
    All rights reserved.

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:
    1. Redistributions of source code must retain the above copyright
       notice, this list of conditions and the following disclaimer.
    2. Redistributions in binary form must reproduce the above copyright
       notice, this list of conditions and the following disclaimer in the
       documentation and/or other materials provided with the distribution.

    THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
    OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
    HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
    LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
    OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
    SUCH DAMAGE.

[enc/cesu_8.c]
[enc/windows_1253.c]
[enc/windows_1254.c]
[enc/windows_1257.c]

  >>>
    Copyright (c) 2002-2007::  K.Kosako  <sndgk393 AT ybb DOT ne DOT jp>
    All rights reserved.

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:
    1. Redistributions of source code must retain the above copyright
       notice, this list of conditions and the following disclaimer.
    2. Redistributions in binary form must reproduce the above copyright
       notice, this list of conditions and the following disclaimer in the
       documentation and/or other materials provided with the distribution.

    THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
    OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
    HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
    LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
    OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
    SUCH DAMAGE.

[enc/trans/GB/GB12345%UCS.src]
[enc/trans/GB/UCS%GB12345.src]
[enc/trans/GB/GB2312%UCS.src]
[enc/trans/GB/UCS%GB2312.src]

  These files have this explanatory texts.

  >>>
    This mapping data was created from files provided by Unicode, Inc.
    (The Unicode Consortium). The files were used to create a product supporting
    Unicode, as explicitly permitted in the files' copyright notices.
    Please note that Unicode, Inc. never made any claims as to fitness of these
    files for any particular purpose, and has ceased to publish the files many
    years ago.

[enc/trans/JIS/JISX0201-KANA%UCS.src]
[enc/trans/JIS/JISX0208\@1990%UCS.src]
[enc/trans/JIS/JISX0212%UCS.src]
[enc/trans/JIS/UCS%JISX0201-KANA.src]
[enc/trans/JIS/UCS%JISX0208@1990.src]
[enc/trans/JIS/UCS%JISX0212.src]

  These files are copyrighted as the following.

  >>>
    © 2015 Unicode®, Inc.

    For terms of use, see http://www.unicode.org/terms_of_use.html

[enc/trans/JIS/JISX0213-1%UCS@BMP.src]
[enc/trans/JIS/JISX0213-1%UCS@SIP.src]
[enc/trans/JIS/JISX0213-2%UCS@BMP.src]
[enc/trans/JIS/JISX0213-2%UCS@SIP.src]

  These files are copyrighted as the following.

  >>>
    Copyright (C) 2001:: earthian@tama.or.jp, All Rights Reserved.
    Copyright (C) 2001:: I'O, All Rights Reserved.
    Copyright (C) 2006:: Project X0213, All Rights Reserved.
    You can use, modify, distribute this table freely.

[enc/trans/JIS/UCS@BMP%JISX0213-1.src]
[enc/trans/JIS/UCS@BMP%JISX0213-2.src]
[enc/trans/JIS/UCS@SIP%JISX0213-1.src]
[enc/trans/JIS/UCS@SIP%JISX0213-2.src]

  These files are copyrighted as the following.

  >>>
    Copyright (C) 2001:: earthian@tama.or.jp, All Rights Reserved.
    Copyright (C) 2001:: I'O, All Rights Reserved.
    You can use, modify, distribute this table freely.

[enc/trans/ucm/glibc-BIG5-2.3.3.ucm]
[enc/trans/ucm/glibc-BIG5HKSCS-2.3.3.ucm]

  >>>
    Copyright (C) 2001-2005:: International Business Machines
                              Corporation and others.  All Rights Reserved.

[enc/trans/ucm/windows-950-2000.ucm]
[enc/trans/ucm/windows-950_hkscs-2001.ucm]

  >>>
    Copyright (C) 2001-2002:: International Business Machines
                              Corporation and others.  All Rights Reserved.


[configure]

  This file is free software.

  >>>
    Copyright (C) 1992-1996, 1998-2012:: Free Software Foundation, Inc.

    This configure script is free software; the Free Software Foundation
    gives unlimited permission to copy, distribute and modify it.

[tool/config.guess]
[tool/config.sub]

  As long as you distribute these files with the file configure, they
  are covered under the Ruby's license.

  >>>
    Copyright 1992-2018:: Free Software Foundation, Inc.

    This file is free software; you can redistribute it and/or modify it
    under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful, but
    WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
    General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, see <https://www.gnu.org/licenses/>.

    As a special exception to the GNU General Public License, if you
    distribute this file as part of a program that contains a
    configuration script generated by Autoconf, you may include it under
    the same distribution terms that you use for the rest of that
    program.  This Exception is an additional permission under section 7
    of the GNU General Public License, version 3 ("GPLv3").

[tool/lib/test/*]
[tool/lib/core_assertions.rb]

  Some of methods on these files are based on MiniTest 4. MiniTest 4 is
  distributed under the MIT License.

  >>>
    Copyright (c) Ryan Davis, seattle.rb

    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the
    'Software'), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to
    the following conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
    CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
    TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
    SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[parse.c]
[parse.h]

  These files are licensed under the GPL, but are incorporated into Ruby and
  redistributed under the terms of the Ruby license, as permitted by the
  exception to the GPL below.

  >>>
    Copyright (C) 1984, 1989-1990, 2000-2015, 2018:: Free Software Foundation, Inc.

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

    As a special exception, you may create a larger work that contains
    part or all of the Bison parser skeleton and distribute that work
    under terms of your choice, so long as that work isn't itself a
    parser generator using the skeleton or a modified version thereof
    as a parser skeleton.  Alternatively, if you modify or redistribute
    the parser skeleton itself, you may (at your option) remove this
    special exception, which will cause the skeleton and the resulting
    Bison output files to be licensed under the GNU General Public
    License without this special exception.

    This special exception was added by the Free Software Foundation in
    version 2.2 of Bison.

[missing/dtoa.c]

  This file is under these licenses.

  >>>
    Copyright (c) 1991, 2000, 2001:: by Lucent Technologies.

    Permission to use, copy, modify, and distribute this software for any
    purpose without fee is hereby granted, provided that this entire notice
    is included in all copies of any software which is or includes a copy
    or modification of this software and in all copies of the supporting
    documentation for such software.

    THIS SOFTWARE IS BEING PROVIDED "AS IS", WITHOUT ANY EXPRESS OR IMPLIED
    WARRANTY.  IN PARTICULAR, NEITHER THE AUTHOR NOR LUCENT MAKES ANY
    REPRESENTATION OR WARRANTY OF ANY KIND CONCERNING THE MERCHANTABILITY
    OF THIS SOFTWARE OR ITS FITNESS FOR ANY PARTICULAR PURPOSE.

  >>>
    Copyright (c) 2004-2008:: David Schultz <das@FreeBSD.ORG>
                              All rights reserved.

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:
    1. Redistributions of source code must retain the above copyright
       notice, this list of conditions and the following disclaimer.
    2. Redistributions in binary form must reproduce the above copyright
       notice, this list of conditions and the following disclaimer in the
       documentation and/or other materials provided with the distribution.

    THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
    OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
    HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
    LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
    OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
    SUCH DAMAGE.

[win32/win32.c]
[include/ruby/win32.h]

  You can apply the Artistic License to these files. (or GPL,
  alternatively)

  >>>
    Copyright (c) 1993:: Intergraph Corporation

    You may distribute under the terms of either the GNU General Public
    License or the Artistic License, as specified in the perl README file.

[missing/mt19937.c]

  This file is under the new-style BSD license.

  >>>
    A C-program for MT19937, with initialization improved 2002/2/10.::
    Coded by Takuji Nishimura and Makoto Matsumoto.

    This is a faster version by taking Shawn Cokus's optimization,
    Matthe Bellew's simplification, Isaku Wada's real version.

    Before using, initialize the state by using init_genrand(seed)
    or init_by_array(init_key, key_length).

    Copyright (C) 1997 - 2002:: Makoto Matsumoto and Takuji Nishimura,
                                All rights reserved.

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:

    1. Redistributions of source code must retain the above copyright
       notice, this list of conditions and the following disclaimer.

    2. Redistributions in binary form must reproduce the above copyright
       notice, this list of conditions and the following disclaimer in the
       documentation and/or other materials provided with the distribution.

    3. The names of its contributors may not be used to endorse or promote
       products derived from this software without specific prior written
       permission.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
    "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
    LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
    A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
    CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
    EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
    PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
    PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
    LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
    NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
    SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


    Any feedback is very welcome.
    http://www.math.keio.ac.jp/matumoto/emt.html
    email: matumoto@math.keio.ac.jp

  The Wayback Machine url: http://web.archive.org/web/19990429082237/http://www.math.keio.ac.jp/matumoto/emt.html

[missing/procstat_vm.c]

  This file is under the new-style BSD license.

  >>>
    Copyright (c) 2007:: Robert N. M. Watson
                         All rights reserved.

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:
    1. Redistributions of source code must retain the above copyright
       notice, this list of conditions and the following disclaimer.
    2. Redistributions in binary form must reproduce the above copyright
       notice, this list of conditions and the following disclaimer in the
       documentation and/or other materials provided with the distribution.

    THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
    OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
    HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
    LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
    OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
    SUCH DAMAGE.

    $FreeBSD: head/usr.bin/procstat/procstat_vm.c 261780 2014-02-11 21:57:37Z jhb $

[vsnprintf.c]

  This file is under the {old-style BSD license}[rdoc-label:label-Old-style+BSD+license].

  >>>
    Copyright (c) 1990, 1993::
    The Regents of the University of California.  All rights reserved.

    This code is derived from software contributed to Berkeley by
    Chris Torek.

[st.c]
[strftime.c]
[include/ruby/st.h]
[missing/acosh.c]
[missing/alloca.c]
[missing/erf.c]
[missing/hypot.c]
[missing/lgamma_r.c]
[missing/memcmp.c]
[missing/memmove.c]
[missing/strchr.c]
[missing/strerror.c]
[missing/strstr.c]
[missing/tgamma.c]
[ext/date/date_strftime.c]
[ext/digest/sha1/sha1.c]
[ext/digest/sha1/sha1.h]

  These files are all under public domain.

[missing/crypt.c]

  This file is under the {old-style BSD license}[rdoc-label:label-Old-style+BSD+license].

  >>>
    Copyright (c) 1989, 1993::
    The Regents of the University of California.  All rights reserved.

    This code is derived from software contributed to Berkeley by
    Tom Truscott.

[missing/setproctitle.c]

  This file is under the {old-style BSD license}[rdoc-label:label-Old-style+BSD+license].

  >>>
    Copyright 2003:: Damien Miller
    Copyright (c) 1983, 1995-1997:: Eric P. Allman
    Copyright (c) 1988, 1993::
    The Regents of the University of California.  All rights reserved.

[missing/strlcat.c]
[missing/strlcpy.c]

  These files are under an ISC-style license.

  >>>
    Copyright (c) 1998, 2015:: Todd C. Miller <Todd.Miller@courtesan.com>

    Permission to use, copy, modify, and distribute this software for any
    purpose with or without fee is hereby granted, provided that the above
    copyright notice and this permission notice appear in all copies.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
    WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
    MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
    ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
    WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
    ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
    OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

[missing/langinfo.c]

  This file is from http://www.cl.cam.ac.uk/~mgk25/ucs/langinfo.c.
  Ruby uses a modified version. The file contains the following
  author/copyright notice:

  >>>
    Markus.Kuhn@cl.cam.ac.uk -- 2002-03-11::
    Permission to use, copy, modify, and distribute this software
    for any purpose and without fee is hereby granted. The author
    disclaims all warranties with regard to this software.

[ext/digest/md5/md5.c]
[ext/digest/md5/md5.h]

  These files are under the following license.  Ruby uses modified
  versions of them.

  >>>
    Copyright (C) 1999, 2000:: Aladdin Enterprises.  All rights reserved.

    This software is provided 'as-is', without any express or implied
    warranty.  In no event will the authors be held liable for any damages
    arising from the use of this software.

    Permission is granted to anyone to use this software for any purpose,
    including commercial applications, and to alter it and redistribute it
    freely, subject to the following restrictions:

    1. The origin of this software must not be misrepresented; you must not
       claim that you wrote the original software. If you use this software
       in a product, an acknowledgment in the product documentation would be
       appreciated but is not required.
    2. Altered source versions must be plainly marked as such, and must not be
       misrepresented as being the original software.
    3. This notice may not be removed or altered from any source distribution.

    L. Peter Deutsch
    ghost@aladdin.com

[ext/digest/rmd160/rmd160.c]
[ext/digest/rmd160/rmd160.h]

  These files have the following copyright information, and by the
  author we are allowed to use it under the new-style BSD license.

  >>>
    AUTHOR::  Antoon Bosselaers, ESAT-COSIC
              (Arranged for libc by Todd C. Miller)
    DATE::    1 March 1996

    Copyright (c):: Katholieke Universiteit Leuven
    1996, All Rights Reserved

[ext/digest/sha2/sha2.c]
[ext/digest/sha2/sha2.h]

  These files are under the new-style BSD license.

  >>>
    Copyright 2000:: Aaron D. Gifford.  All rights reserved.

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:
    1. Redistributions of source code must retain the above copyright
       notice, this list of conditions and the following disclaimer.
    2. Redistributions in binary form must reproduce the above copyright
       notice, this list of conditions and the following disclaimer in the
       documentation and/or other materials provided with the distribution.
    3. Neither the name of the copyright holder nor the names of contributors
       may be used to endorse or promote products derived from this software
       without specific prior written permission.

    THIS SOFTWARE IS PROVIDED BY THE AUTHOR(S) AND CONTRIBUTOR(S) ``AS IS'' AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR(S) OR CONTRIBUTOR(S) BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
    OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
    HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
    LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
    OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
    SUCH DAMAGE.

[ext/json/generator/generator.c]

  The file contains the following copyright notice.

  >>>
    Copyright 2001-2004:: Unicode, Inc.

    Disclaimer::

      This source code is provided as is by Unicode, Inc. No claims are
      made as to fitness for any particular purpose. No warranties of any
      kind are expressed or implied. The recipient agrees to determine
      applicability of information provided. If this file has been
      purchased on magnetic or optical media from Unicode, Inc., the
      sole remedy for any claim will be exchange of defective media
      within 90 days of receipt.

    Limitations on Rights to Redistribute This Code::

      Unicode, Inc. hereby grants the right to freely use the information
      supplied in this file in the creation of products supporting the
      Unicode Standard, and to make copies of this file in any form
      for internal or external distribution as long as this notice
      remains attached.

[ext/nkf/nkf-utf8/config.h]
[ext/nkf/nkf-utf8/nkf.c]
[ext/nkf/nkf-utf8/utf8tbl.c]

  These files are under the following license.  So to speak, it is
  copyrighted semi-public-domain software.

  >>>
    Copyright (C) 1987:: Fujitsu LTD. (Itaru ICHIKAWA)

    Everyone is permitted to do anything on this program
    including copying, modifying, improving,
    as long as you don't try to pretend that you wrote it.
    i.e., the above copyright notice has to appear in all copies.
    Binary distribution requires original version messages.
    You don't have to ask before copying, redistribution or publishing.
    THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE.

[ext/psych]
[test/psych]

  The files under these directories are under the following license, except for
  ext/psych/yaml.

  >>>
    Copyright 2009:: Aaron Patterson, et al.

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the 'Software'), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
    of the Software, and to permit persons to whom the Software is furnished to do
    so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

[ext/psych/yaml]

  The files under this directory are under the following license.

  >>>
    Copyright (c) 2006:: Kirill Simonov

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
    of the Software, and to permit persons to whom the Software is furnished to do
    so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

[ext/pty/pty.c]

  >>>
    C) Copyright 1998:: by Akinori Ito.

    This software may be redistributed freely for this purpose, in full
    or in part, provided that this entire copyright notice is included
    on any copies of this software and applications and derivations thereof.

    This software is provided on an "as is" basis, without warranty of any
    kind, either expressed or implied, as to any matter including, but not
    limited to warranty of fitness of purpose, or merchantability, or
    results obtained from use of this software.

[ext/socket/addrinfo.h]
[ext/socket/getaddrinfo.c]
[ext/socket/getnameinfo.c]

  These files are under the new-style BSD license.

  >>>
    Copyright (C) 1995, 1996, 1997, 1998, and 1999:: WIDE Project.
    All rights reserved.

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:
    1. Redistributions of source code must retain the above copyright
       notice, this list of conditions and the following disclaimer.
    2. Redistributions in binary form must reproduce the above copyright
       notice, this list of conditions and the following disclaimer in the
       documentation and/or other materials provided with the distribution.
    3. Neither the name of the project nor the names of its contributors
       may be used to endorse or promote products derived from this software
       without specific prior written permission.

    THIS SOFTWARE IS PROVIDED BY THE PROJECT AND CONTRIBUTORS ``AS IS'' AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    ARE DISCLAIMED.  IN NO EVENT SHALL THE PROJECT OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
    OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
    HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
    LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
    OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
    SUCH DAMAGE.

[ext/win32ole/win32ole.c]

  You can apply the Artistic License to this file. (or GPL,
  alternatively)

  >>>
    (c) 1995:: Microsoft Corporation. All rights reserved.
    Developed by ActiveWare Internet Corp., http://www.ActiveWare.com

    Other modifications Copyright (c) 1997, 1998:: by Gurusamy Sarathy
    <gsar@umich.edu> and Jan Dubois <jan.dubois@ibm.net>

    You may distribute under the terms of either the GNU General Public
    License or the Artistic License, as specified in the README file
    of the Perl distribution.

  The Wayback Machine url: http://web.archive.org/web/19970607104352/http://www.activeware.com:80/

[lib/rdoc/generator/template/darkfish/css/fonts.css]

  This file is licensed under the {SIL Open Font License}[http://scripts.sil.org/OFL].

[spec/mspec]
[spec/ruby]

  The files under these directories are under the following license.

  >>>
    Copyright (c) 2008:: Engine Yard, Inc. All rights reserved.

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.

[lib/rubygems.rb]
[lib/rubygems]
[test/rubygems]

  RubyGems is under the following license.

  >>>
    RubyGems is copyrighted free software by Chad Fowler, Rich Kilmer, Jim
    Weirich and others.  You can redistribute it and/or modify it under
    either the terms of the {MIT license}[rdoc-label:label-MIT+License], or the conditions
    below:

    1. You may make and give away verbatim copies of the source form of the
       software without restriction, provided that you duplicate all of the
       original copyright notices and associated disclaimers.

    2. You may modify your copy of the software in any way, provided that
       you do at least ONE of the following:

       a. place your modifications in the Public Domain or otherwise
          make them Freely Available, such as by posting said
          modifications to Usenet or an equivalent medium, or by allowing
          the author to include your modifications in the software.

       b. use the modified software only within your corporation or
          organization.

       c. give non-standard executables non-standard names, with
          instructions on where to get the original software distribution.

       d. make other distribution arrangements with the author.

    3. You may distribute the software in object code or executable
       form, provided that you do at least ONE of the following:

       a. distribute the executables and library files of the software,
          together with instructions (in the manual page or equivalent)
          on where to get the original distribution.

       b. accompany the distribution with the machine-readable source of
          the software.

       c. give non-standard executables non-standard names, with
          instructions on where to get the original software distribution.

       d. make other distribution arrangements with the author.

    4. You may modify and include the part of the software into any other
       software (possibly commercial).

    5. The scripts and library files supplied as input to or produced as
       output from the software do not automatically fall under the
       copyright of the software, but belong to whomever generated them,
       and may be sold commercially, and may be aggregated with this
       software.

    6. THIS SOFTWARE IS PROVIDED "AS IS" AND WITHOUT ANY EXPRESS OR
       IMPLIED WARRANTIES, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
       WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
       PURPOSE.

[lib/bundler]
[lib/bundler.rb]
[spec/bundler]

  Bundler is under the following license.

  >>>
    Portions copyright (c) 2010:: Andre Arko
    Portions copyright (c) 2009:: Engine Yard

    {MIT License}[rdoc-label:label-MIT+License]

[lib/bundler/vendor/thor]

  Thor is under the following license.

  >>>
    Copyright (c) 2008 Yehuda Katz, Eric Hodel, et al.

    {MIT License}[rdoc-label:label-MIT+License]

[lib/rubygems/resolver/molinillo]
[lib/bundler/vendor/molinillo]

  molinillo is under the following license.

  >>>
    Copyright (c) 2014 Samuel E. Giddins segiddins@segiddins.me

    {MIT License}[rdoc-label:label-MIT+License]

[lib/bundler/vendor/connection_pool]

  connection_pool is under the following license.

  >>>
    Copyright (c) 2011 Mike Perham

    {MIT License}[rdoc-label:label-MIT+License]

[lib/bundler/vendor/net-http-persistent]

  net-http-persistent is under the following license.

  >>>
    Copyright (c) Eric Hodel, Aaron Patterson

    {MIT License}[rdoc-label:label-MIT+License]

[lib/did_you_mean]
[lib/did_you_mean.rb]
[test/did_you_mean]

  did_you_mean is under the following license.

  >>>
    Copyright (c) 2014-2016 Yuki Nishijima

    {MIT License}[rdoc-label:label-MIT+License]

[lib/error_highlight]
[lib/error_highlight.rb]
[test/error_highlight]

  error_highlight is under the following license.

  >>>
    Copyright (c) 2021 Yusuke Endoh

    {MIT License}[rdoc-label:label-MIT+License]

[benchmark/so_ackermann.rb]
[benchmark/so_array.rb]
[benchmark/so_binary_trees.rb]
[benchmark/so_concatenate.rb]
[benchmark/so_count_words.yml]
[benchmark/so_exception.rb]
[benchmark/so_fannkuch.rb]
[benchmark/so_fasta.rb]
[benchmark/so_k_nucleotide.yml]
[benchmark/so_lists.rb]
[benchmark/so_mandelbrot.rb]
[benchmark/so_matrix.rb]
[benchmark/so_meteor_contest.rb]
[benchmark/so_nbody.rb]
[benchmark/so_nested_loop.rb]
[benchmark/so_nsieve.rb]
[benchmark/so_nsieve_bits.rb]
[benchmark/so_object.rb]
[benchmark/so_partial_sums.rb]
[benchmark/so_pidigits.rb]
[benchmark/so_random.rb]
[benchmark/so_reverse_complement.yml]
[benchmark/so_sieve.rb]
[benchmark/so_spectralnorm.rb]

  These files are very old copy of then-called "The Great Computer Language
  Shootout".  LEGAL SITUATION OF THESE FILES ARE UNCLEAR because the original
  site has been lost.  Upstream diverged to delete several benchmarks listed
  above.

== MIT License
>>>
      Permission is hereby granted, free of charge, to any person obtaining
      a copy of this software and associated documentation files (the
      "Software"), to deal in the Software without restriction, including
      without limitation the rights to use, copy, modify, merge, publish,
      distribute, sublicense, and/or sell copies of the Software, and to
      permit persons to whom the Software is furnished to do so, subject to
      the following conditions:

      The above copyright notice and this permission notice shall be
      included in all copies or substantial portions of the Software.

      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
      NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
      LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
      OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
      WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

== Old-style BSD license
>>>
      Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions
      are met:
      1. Redistributions of source code must retain the above copyright
         notice, this list of conditions and the following disclaimer.
      2. Redistributions in binary form must reproduce the above copyright
         notice, this list of conditions and the following disclaimer in the
         documentation and/or other materials provided with the distribution.
      3. Neither the name of the University nor the names of its contributors
         may be used to endorse or promote products derived from this software
         without specific prior written permission.

      THIS SOFTWARE IS PROVIDED BY THE REGENTS AND CONTRIBUTORS ``AS IS'' AND
      ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
      ARE DISCLAIMED.  IN NO EVENT SHALL THE REGENTS OR CONTRIBUTORS BE LIABLE
      FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
      DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
      OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
      HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
      LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
      OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
      SUCH DAMAGE.

      IMPORTANT NOTE::

      From ftp://ftp.cs.berkeley.edu/pub/4bsd/README.Impt.License.Change
      paragraph 3 above is now null and void.
```

Other bundled gems are licenced by their own license declared in their gemspecs.

## LibYAML

https://github.com/yaml/libyaml

```
Copyright (c) 2017-2020 Ingy döt Net
Copyright (c) 2006-2016 Kirill Simonov
Licensed under the MIT License.
```


## Zlib

https://www.zlib.net

```
  zlib.h -- interface of the 'zlib' general purpose compression library
  version 1.2.13, October 13th, 2022

  Copyright (C) 1995-2022 Jean-loup Gailly and Mark Adler

  This software is provided 'as-is', without any express or implied
  warranty.  In no event will the authors be held liable for any damages
  arising from the use of this software.

  Permission is granted to anyone to use this software for any purpose,
  including commercial applications, and to alter it and redistribute it
  freely, subject to the following restrictions:

  1. The origin of this software must not be misrepresented; you must not
     claim that you wrote the original software. If you use this software
     in a product, an acknowledgment in the product documentation would be
     appreciated but is not required.
  2. Altered source versions must be plainly marked as such, and must not be
     misrepresented as being the original software.
  3. This notice may not be removed or altered from any source distribution.

  Jean-loup Gailly        Mark Adler
  jloup@gzip.org          madler@alumni.caltech.edu
```

## wasi-libc

https://github.com/WebAssembly/wasi-libc

```
wasi-libc as a whole is multi-licensed under the
Apache License v2.0 with LLVM Exceptions, the Apache License v2.0, and
the MIT License. See the LICENSE-APACHE-LLVM, LICENSE-APACHE and LICENSE-MIT
files, respectively, for details.

Portions of this software are derived from third-party works covered by
their own licenses:

dlmalloc/                     - CC0; see the notice in malloc.c for details
emmalloc/                     - MIT; see the notice in emmalloc.c for details
libc-bottom-half/cloudlibc/   - BSD-2-Clause; see the LICENSE file for details
libc-top-half/musl/           - MIT; see the COPYRIGHT file for details

wasi-libc's changes to these files are multi-licensed under the
Apache License v2.0 with LLVM Exceptions, the Apache License v2.0,
the MIT License, and the original licenses of the third-party works.
```

Licensed under the MIT License

## OpenSSL

https://www.openssl.org/

```
Copyright 1995-2021 The OpenSSL Project Authors. All Rights Reserved.
Licensed under the Apache License 2.0 https://www.openssl.org/source/license.html
```

## wasi-vfs

https://github.com/kateinoigakukun/wasi-vfs

```
Copyright (c) 2022 Yuta Saito. All rights reserved.
Licensed under the MIT License
```

---

## MIT License

```
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
*/
(function () {
  'use strict';

  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise, SuppressedError, Symbol */


  function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }

  function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
  }

  typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };

  const CLOCKID_REALTIME=0;const CLOCKID_MONOTONIC=1;const ERRNO_SUCCESS=0;const ERRNO_BADF=8;const ERRNO_NOSYS=52;class Iovec{static read_bytes(view,ptr){const iovec=new Iovec;iovec.buf=view.getUint32(ptr,true);iovec.buf_len=view.getUint32(ptr+4,true);return iovec}static read_bytes_array(view,ptr,len){const iovecs=[];for(let i=0;i<len;i++){iovecs.push(Iovec.read_bytes(view,ptr+8*i));}return iovecs}}class Ciovec{static read_bytes(view,ptr){const iovec=new Ciovec;iovec.buf=view.getUint32(ptr,true);iovec.buf_len=view.getUint32(ptr+4,true);return iovec}static read_bytes_array(view,ptr,len){const iovecs=[];for(let i=0;i<len;i++){iovecs.push(Ciovec.read_bytes(view,ptr+8*i));}return iovecs}}

  let Debug=class Debug{enable(enabled){this.log=createLogger(enabled===undefined?true:enabled,this.prefix);}get enabled(){return this.isEnabled}constructor(isEnabled){this.isEnabled=isEnabled;this.prefix="wasi:";this.enable(isEnabled);}};function createLogger(enabled,prefix){if(enabled){const a=console.log.bind(console,"%c%s","color: #265BA0",prefix);return a}else {return ()=>{}}}const debug=new Debug(false);

  class WASIProcExit extends Error{constructor(code){super("exit with exit code "+code);this.code=code;}}let WASI=class WASI{start(instance){this.inst=instance;try{instance.exports._start();}catch(e){if(e instanceof WASIProcExit){return e.code}else {throw e}}}initialize(instance){this.inst=instance;instance.exports._initialize();}constructor(args,env,fds,options={}){this.args=[];this.env=[];this.fds=[];debug.enable(options.debug);this.args=args;this.env=env;this.fds=fds;const self=this;this.wasiImport={args_sizes_get(argc,argv_buf_size){const buffer=new DataView(self.inst.exports.memory.buffer);buffer.setUint32(argc,self.args.length,true);let buf_size=0;for(const arg of self.args){buf_size+=arg.length+1;}buffer.setUint32(argv_buf_size,buf_size,true);debug.log(buffer.getUint32(argc,true),buffer.getUint32(argv_buf_size,true));return 0},args_get(argv,argv_buf){const buffer=new DataView(self.inst.exports.memory.buffer);const buffer8=new Uint8Array(self.inst.exports.memory.buffer);const orig_argv_buf=argv_buf;for(let i=0;i<self.args.length;i++){buffer.setUint32(argv,argv_buf,true);argv+=4;const arg=new TextEncoder().encode(self.args[i]);buffer8.set(arg,argv_buf);buffer.setUint8(argv_buf+arg.length,0);argv_buf+=arg.length+1;}if(debug.enabled){debug.log(new TextDecoder("utf-8").decode(buffer8.slice(orig_argv_buf,argv_buf)));}return 0},environ_sizes_get(environ_count,environ_size){const buffer=new DataView(self.inst.exports.memory.buffer);buffer.setUint32(environ_count,self.env.length,true);let buf_size=0;for(const environ of self.env){buf_size+=environ.length+1;}buffer.setUint32(environ_size,buf_size,true);debug.log(buffer.getUint32(environ_count,true),buffer.getUint32(environ_size,true));return 0},environ_get(environ,environ_buf){const buffer=new DataView(self.inst.exports.memory.buffer);const buffer8=new Uint8Array(self.inst.exports.memory.buffer);const orig_environ_buf=environ_buf;for(let i=0;i<self.env.length;i++){buffer.setUint32(environ,environ_buf,true);environ+=4;const e=new TextEncoder().encode(self.env[i]);buffer8.set(e,environ_buf);buffer.setUint8(environ_buf+e.length,0);environ_buf+=e.length+1;}if(debug.enabled){debug.log(new TextDecoder("utf-8").decode(buffer8.slice(orig_environ_buf,environ_buf)));}return 0},clock_res_get(id,res_ptr){let resolutionValue;switch(id){case CLOCKID_MONOTONIC:{resolutionValue=5000n;break}case CLOCKID_REALTIME:{resolutionValue=1000000n;break}default:return ERRNO_NOSYS}const view=new DataView(self.inst.exports.memory.buffer);view.setBigUint64(res_ptr,resolutionValue,true);return ERRNO_SUCCESS},clock_time_get(id,precision,time){const buffer=new DataView(self.inst.exports.memory.buffer);if(id===CLOCKID_REALTIME){buffer.setBigUint64(time,BigInt(new Date().getTime())*1000000n,true);}else if(id==CLOCKID_MONOTONIC){let monotonic_time;try{monotonic_time=BigInt(Math.round(performance.now()*1e6));}catch(e){monotonic_time=0n;}buffer.setBigUint64(time,monotonic_time,true);}else {buffer.setBigUint64(time,0n,true);}return 0},fd_advise(fd,offset,len,advice){if(self.fds[fd]!=undefined){return self.fds[fd].fd_advise(offset,len,advice)}else {return ERRNO_BADF}},fd_allocate(fd,offset,len){if(self.fds[fd]!=undefined){return self.fds[fd].fd_allocate(offset,len)}else {return ERRNO_BADF}},fd_close(fd){if(self.fds[fd]!=undefined){const ret=self.fds[fd].fd_close();self.fds[fd]=undefined;return ret}else {return ERRNO_BADF}},fd_datasync(fd){if(self.fds[fd]!=undefined){return self.fds[fd].fd_datasync()}else {return ERRNO_BADF}},fd_fdstat_get(fd,fdstat_ptr){if(self.fds[fd]!=undefined){const{ret,fdstat}=self.fds[fd].fd_fdstat_get();if(fdstat!=null){fdstat.write_bytes(new DataView(self.inst.exports.memory.buffer),fdstat_ptr);}return ret}else {return ERRNO_BADF}},fd_fdstat_set_flags(fd,flags){if(self.fds[fd]!=undefined){return self.fds[fd].fd_fdstat_set_flags(flags)}else {return ERRNO_BADF}},fd_fdstat_set_rights(fd,fs_rights_base,fs_rights_inheriting){if(self.fds[fd]!=undefined){return self.fds[fd].fd_fdstat_set_rights(fs_rights_base,fs_rights_inheriting)}else {return ERRNO_BADF}},fd_filestat_get(fd,filestat_ptr){if(self.fds[fd]!=undefined){const{ret,filestat}=self.fds[fd].fd_filestat_get();if(filestat!=null){filestat.write_bytes(new DataView(self.inst.exports.memory.buffer),filestat_ptr);}return ret}else {return ERRNO_BADF}},fd_filestat_set_size(fd,size){if(self.fds[fd]!=undefined){return self.fds[fd].fd_filestat_set_size(size)}else {return ERRNO_BADF}},fd_filestat_set_times(fd,atim,mtim,fst_flags){if(self.fds[fd]!=undefined){return self.fds[fd].fd_filestat_set_times(atim,mtim,fst_flags)}else {return ERRNO_BADF}},fd_pread(fd,iovs_ptr,iovs_len,offset,nread_ptr){const buffer=new DataView(self.inst.exports.memory.buffer);const buffer8=new Uint8Array(self.inst.exports.memory.buffer);if(self.fds[fd]!=undefined){const iovecs=Iovec.read_bytes_array(buffer,iovs_ptr,iovs_len);const{ret,nread}=self.fds[fd].fd_pread(buffer8,iovecs,offset);buffer.setUint32(nread_ptr,nread,true);return ret}else {return ERRNO_BADF}},fd_prestat_get(fd,buf_ptr){const buffer=new DataView(self.inst.exports.memory.buffer);if(self.fds[fd]!=undefined){const{ret,prestat}=self.fds[fd].fd_prestat_get();if(prestat!=null){prestat.write_bytes(buffer,buf_ptr);}return ret}else {return ERRNO_BADF}},fd_prestat_dir_name(fd,path_ptr,path_len){if(self.fds[fd]!=undefined){const{ret,prestat_dir_name}=self.fds[fd].fd_prestat_dir_name();if(prestat_dir_name!=null){const buffer8=new Uint8Array(self.inst.exports.memory.buffer);buffer8.set(prestat_dir_name,path_ptr);}return ret}else {return ERRNO_BADF}},fd_pwrite(fd,iovs_ptr,iovs_len,offset,nwritten_ptr){const buffer=new DataView(self.inst.exports.memory.buffer);const buffer8=new Uint8Array(self.inst.exports.memory.buffer);if(self.fds[fd]!=undefined){const iovecs=Ciovec.read_bytes_array(buffer,iovs_ptr,iovs_len);const{ret,nwritten}=self.fds[fd].fd_pwrite(buffer8,iovecs,offset);buffer.setUint32(nwritten_ptr,nwritten,true);return ret}else {return ERRNO_BADF}},fd_read(fd,iovs_ptr,iovs_len,nread_ptr){const buffer=new DataView(self.inst.exports.memory.buffer);const buffer8=new Uint8Array(self.inst.exports.memory.buffer);if(self.fds[fd]!=undefined){const iovecs=Iovec.read_bytes_array(buffer,iovs_ptr,iovs_len);const{ret,nread}=self.fds[fd].fd_read(buffer8,iovecs);buffer.setUint32(nread_ptr,nread,true);return ret}else {return ERRNO_BADF}},fd_readdir(fd,buf,buf_len,cookie,bufused_ptr){const buffer=new DataView(self.inst.exports.memory.buffer);const buffer8=new Uint8Array(self.inst.exports.memory.buffer);if(self.fds[fd]!=undefined){let bufused=0;while(true){const{ret,dirent}=self.fds[fd].fd_readdir_single(cookie);if(ret!=0){buffer.setUint32(bufused_ptr,bufused,true);return ret}if(dirent==null){break}if(buf_len-bufused<dirent.head_length()){bufused=buf_len;break}const head_bytes=new ArrayBuffer(dirent.head_length());dirent.write_head_bytes(new DataView(head_bytes),0);buffer8.set(new Uint8Array(head_bytes).slice(0,Math.min(head_bytes.byteLength,buf_len-bufused)),buf);buf+=dirent.head_length();bufused+=dirent.head_length();if(buf_len-bufused<dirent.name_length()){bufused=buf_len;break}dirent.write_name_bytes(buffer8,buf,buf_len-bufused);buf+=dirent.name_length();bufused+=dirent.name_length();cookie=dirent.d_next;}buffer.setUint32(bufused_ptr,bufused,true);return 0}else {return ERRNO_BADF}},fd_renumber(fd,to){if(self.fds[fd]!=undefined&&self.fds[to]!=undefined){const ret=self.fds[to].fd_close();if(ret!=0){return ret}self.fds[to]=self.fds[fd];self.fds[fd]=undefined;return 0}else {return ERRNO_BADF}},fd_seek(fd,offset,whence,offset_out_ptr){const buffer=new DataView(self.inst.exports.memory.buffer);if(self.fds[fd]!=undefined){const{ret,offset:offset_out}=self.fds[fd].fd_seek(offset,whence);buffer.setBigInt64(offset_out_ptr,offset_out,true);return ret}else {return ERRNO_BADF}},fd_sync(fd){if(self.fds[fd]!=undefined){return self.fds[fd].fd_sync()}else {return ERRNO_BADF}},fd_tell(fd,offset_ptr){const buffer=new DataView(self.inst.exports.memory.buffer);if(self.fds[fd]!=undefined){const{ret,offset}=self.fds[fd].fd_tell();buffer.setBigUint64(offset_ptr,offset,true);return ret}else {return ERRNO_BADF}},fd_write(fd,iovs_ptr,iovs_len,nwritten_ptr){const buffer=new DataView(self.inst.exports.memory.buffer);const buffer8=new Uint8Array(self.inst.exports.memory.buffer);if(self.fds[fd]!=undefined){const iovecs=Ciovec.read_bytes_array(buffer,iovs_ptr,iovs_len);const{ret,nwritten}=self.fds[fd].fd_write(buffer8,iovecs);buffer.setUint32(nwritten_ptr,nwritten,true);return ret}else {return ERRNO_BADF}},path_create_directory(fd,path_ptr,path_len){const buffer8=new Uint8Array(self.inst.exports.memory.buffer);if(self.fds[fd]!=undefined){const path=new TextDecoder("utf-8").decode(buffer8.slice(path_ptr,path_ptr+path_len));return self.fds[fd].path_create_directory(path)}},path_filestat_get(fd,flags,path_ptr,path_len,filestat_ptr){const buffer=new DataView(self.inst.exports.memory.buffer);const buffer8=new Uint8Array(self.inst.exports.memory.buffer);if(self.fds[fd]!=undefined){const path=new TextDecoder("utf-8").decode(buffer8.slice(path_ptr,path_ptr+path_len));const{ret,filestat}=self.fds[fd].path_filestat_get(flags,path);if(filestat!=null){filestat.write_bytes(buffer,filestat_ptr);}return ret}else {return ERRNO_BADF}},path_filestat_set_times(fd,flags,path_ptr,path_len,atim,mtim,fst_flags){const buffer8=new Uint8Array(self.inst.exports.memory.buffer);if(self.fds[fd]!=undefined){const path=new TextDecoder("utf-8").decode(buffer8.slice(path_ptr,path_ptr+path_len));return self.fds[fd].path_filestat_set_times(flags,path,atim,mtim,fst_flags)}else {return ERRNO_BADF}},path_link(old_fd,old_flags,old_path_ptr,old_path_len,new_fd,new_path_ptr,new_path_len){const buffer8=new Uint8Array(self.inst.exports.memory.buffer);if(self.fds[old_fd]!=undefined&&self.fds[new_fd]!=undefined){const old_path=new TextDecoder("utf-8").decode(buffer8.slice(old_path_ptr,old_path_ptr+old_path_len));const new_path=new TextDecoder("utf-8").decode(buffer8.slice(new_path_ptr,new_path_ptr+new_path_len));return self.fds[new_fd].path_link(old_fd,old_flags,old_path,new_path)}else {return ERRNO_BADF}},path_open(fd,dirflags,path_ptr,path_len,oflags,fs_rights_base,fs_rights_inheriting,fd_flags,opened_fd_ptr){const buffer=new DataView(self.inst.exports.memory.buffer);const buffer8=new Uint8Array(self.inst.exports.memory.buffer);if(self.fds[fd]!=undefined){const path=new TextDecoder("utf-8").decode(buffer8.slice(path_ptr,path_ptr+path_len));debug.log(path);const{ret,fd_obj}=self.fds[fd].path_open(dirflags,path,oflags,fs_rights_base,fs_rights_inheriting,fd_flags);if(ret!=0){return ret}self.fds.push(fd_obj);const opened_fd=self.fds.length-1;buffer.setUint32(opened_fd_ptr,opened_fd,true);return 0}else {return ERRNO_BADF}},path_readlink(fd,path_ptr,path_len,buf_ptr,buf_len,nread_ptr){const buffer=new DataView(self.inst.exports.memory.buffer);const buffer8=new Uint8Array(self.inst.exports.memory.buffer);if(self.fds[fd]!=undefined){const path=new TextDecoder("utf-8").decode(buffer8.slice(path_ptr,path_ptr+path_len));debug.log(path);const{ret,data}=self.fds[fd].path_readlink(path);if(data!=null){if(data.length>buf_len){buffer.setUint32(nread_ptr,0,true);return ERRNO_BADF}buffer8.set(data,buf_ptr);buffer.setUint32(nread_ptr,data.length,true);}return ret}else {return ERRNO_BADF}},path_remove_directory(fd,path_ptr,path_len){const buffer8=new Uint8Array(self.inst.exports.memory.buffer);if(self.fds[fd]!=undefined){const path=new TextDecoder("utf-8").decode(buffer8.slice(path_ptr,path_ptr+path_len));return self.fds[fd].path_remove_directory(path)}else {return ERRNO_BADF}},path_rename(fd,old_path_ptr,old_path_len,new_fd,new_path_ptr,new_path_len){throw "FIXME what is the best abstraction for this?"},path_symlink(old_path_ptr,old_path_len,fd,new_path_ptr,new_path_len){const buffer8=new Uint8Array(self.inst.exports.memory.buffer);if(self.fds[fd]!=undefined){const old_path=new TextDecoder("utf-8").decode(buffer8.slice(old_path_ptr,old_path_ptr+old_path_len));const new_path=new TextDecoder("utf-8").decode(buffer8.slice(new_path_ptr,new_path_ptr+new_path_len));return self.fds[fd].path_symlink(old_path,new_path)}else {return ERRNO_BADF}},path_unlink_file(fd,path_ptr,path_len){const buffer8=new Uint8Array(self.inst.exports.memory.buffer);if(self.fds[fd]!=undefined){const path=new TextDecoder("utf-8").decode(buffer8.slice(path_ptr,path_ptr+path_len));return self.fds[fd].path_unlink_file(path)}else {return ERRNO_BADF}},poll_oneoff(in_,out,nsubscriptions){throw "async io not supported"},proc_exit(exit_code){throw new WASIProcExit(exit_code)},proc_raise(sig){throw "raised signal "+sig},sched_yield(){},random_get(buf,buf_len){const buffer8=new Uint8Array(self.inst.exports.memory.buffer);for(let i=0;i<buf_len;i++){buffer8[buf+i]=Math.random()*256|0;}},sock_recv(fd,ri_data,ri_flags){throw "sockets not supported"},sock_send(fd,si_data,si_flags){throw "sockets not supported"},sock_shutdown(fd,how){throw "sockets not supported"},sock_accept(fd,flags){throw "sockets not supported"}};}};

  /**
   * Create a console printer that can be used as an overlay of WASI imports.
   * See the example below for how to use it.
   *
   * ```javascript
   * const imports = {
   *  "wasi_snapshot_preview1": wasi.wasiImport,
   * }
   * const printer = consolePrinter();
   * printer.addToImports(imports);
   *
   * const instance = await WebAssembly.instantiate(module, imports);
   * printer.setMemory(instance.exports.memory);
   * ```
   *
   * Note that the `stdout` and `stderr` functions are called with text, not
   * bytes. This means that bytes written to stdout/stderr will be decoded as
   * UTF-8 and then passed to the `stdout`/`stderr` functions every time a write
   * occurs without buffering.
   *
   * @param stdout A function that will be called when stdout is written to.
   *               Defaults to `console.log`.
   * @param stderr A function that will be called when stderr is written to.
   *               Defaults to `console.warn`.
   * @returns An object that can be used as an overlay of WASI imports.
   */
  function consolePrinter({ stdout, stderr, } = {
      stdout: console.log,
      stderr: console.warn,
  }) {
      let memory = undefined;
      let _view = undefined;
      function getMemoryView() {
          if (typeof memory === "undefined") {
              throw new Error("Memory is not set");
          }
          if (_view === undefined || _view.buffer.byteLength === 0) {
              _view = new DataView(memory.buffer);
          }
          return _view;
      }
      const decoder = new TextDecoder();
      return {
          addToImports(imports) {
              const wasiImport = imports.wasi_snapshot_preview1;
              const original_fd_write = wasiImport.fd_write;
              wasiImport.fd_write = (fd, iovs, iovsLen, nwritten) => {
                  if (fd !== 1 && fd !== 2) {
                      return original_fd_write(fd, iovs, iovsLen, nwritten);
                  }
                  const view = getMemoryView();
                  const buffers = Array.from({ length: iovsLen }, (_, i) => {
                      const ptr = iovs + i * 8;
                      const buf = view.getUint32(ptr, true);
                      const bufLen = view.getUint32(ptr + 4, true);
                      return new Uint8Array(memory.buffer, buf, bufLen);
                  });
                  let written = 0;
                  let str = "";
                  for (const buffer of buffers) {
                      str += decoder.decode(buffer);
                      written += buffer.byteLength;
                  }
                  view.setUint32(nwritten, written, true);
                  const log = fd === 1 ? stdout : stderr;
                  log(str);
                  return 0;
              };
              const original_fd_filestat_get = wasiImport.fd_filestat_get;
              wasiImport.fd_filestat_get = (fd, filestat) => {
                  if (fd !== 1 && fd !== 2) {
                      return original_fd_filestat_get(fd, filestat);
                  }
                  const view = getMemoryView();
                  const result = original_fd_filestat_get(fd, filestat);
                  if (result !== 0) {
                      return result;
                  }
                  const filetypePtr = filestat + 0;
                  view.setUint8(filetypePtr, 2); // FILETYPE_CHARACTER_DEVICE
                  return 0;
              };
              const original_fd_fdstat_get = wasiImport.fd_fdstat_get;
              wasiImport.fd_fdstat_get = (fd, fdstat) => {
                  if (fd !== 1 && fd !== 2) {
                      return original_fd_fdstat_get(fd, fdstat);
                  }
                  const view = getMemoryView();
                  const fs_filetypePtr = fdstat + 0;
                  view.setUint8(fs_filetypePtr, 2); // FILETYPE_CHARACTER_DEVICE
                  const fs_rights_basePtr = fdstat + 8;
                  view.setBigUint64(fs_rights_basePtr, BigInt(1)); // RIGHTS_FD_WRITE
                  return 0;
              };
          },
          setMemory(m) {
              memory = m;
          },
      };
  }

  let DATA_VIEW = new DataView(new ArrayBuffer());
  function data_view(mem) {
      if (DATA_VIEW.buffer !== mem.buffer)
          DATA_VIEW = new DataView(mem.buffer);
      return DATA_VIEW;
  }
  function to_uint32(val) {
      return val >>> 0;
  }
  const UTF8_DECODER = new TextDecoder('utf-8');
  const UTF8_ENCODER = new TextEncoder('utf-8');
  function utf8_encode(s, realloc, memory) {
      if (typeof s !== 'string')
          throw new TypeError('expected a string');
      if (s.length === 0) {
          UTF8_ENCODED_LEN = 0;
          return 1;
      }
      let alloc_len = 0;
      let ptr = 0;
      let writtenTotal = 0;
      while (s.length > 0) {
          ptr = realloc(ptr, alloc_len, 1, alloc_len + s.length);
          alloc_len += s.length;
          const { read, written } = UTF8_ENCODER.encodeInto(s, new Uint8Array(memory.buffer, ptr + writtenTotal, alloc_len - writtenTotal));
          writtenTotal += written;
          s = s.slice(read);
      }
      if (alloc_len > writtenTotal)
          ptr = realloc(ptr, alloc_len, 1, writtenTotal);
      UTF8_ENCODED_LEN = writtenTotal;
      return ptr;
  }
  let UTF8_ENCODED_LEN = 0;
  class Slab {
      constructor() {
          this.list = [];
          this.head = 0;
      }
      insert(val) {
          if (this.head >= this.list.length) {
              this.list.push({
                  next: this.list.length + 1,
                  val: undefined,
              });
          }
          const ret = this.head;
          const slot = this.list[ret];
          this.head = slot.next;
          slot.next = -1;
          slot.val = val;
          return ret;
      }
      get(idx) {
          if (idx >= this.list.length)
              throw new RangeError('handle index not valid');
          const slot = this.list[idx];
          if (slot.next === -1)
              return slot.val;
          throw new RangeError('handle index not valid');
      }
      remove(idx) {
          const ret = this.get(idx); // validate the slot
          const slot = this.list[idx];
          slot.val = undefined;
          slot.next = this.head;
          this.head = idx;
          return ret;
      }
  }
  function throw_invalid_bool() {
      throw new RangeError("invalid variant discriminant for bool");
  }

  class RbAbiGuest {
      constructor() {
          this._resource0_slab = new Slab();
          this._resource1_slab = new Slab();
      }
      addToImports(imports) {
          if (!("canonical_abi" in imports))
              imports["canonical_abi"] = {};
          imports.canonical_abi['resource_drop_rb-iseq'] = i => {
              this._resource0_slab.remove(i).drop();
          };
          imports.canonical_abi['resource_clone_rb-iseq'] = i => {
              const obj = this._resource0_slab.get(i);
              return this._resource0_slab.insert(obj.clone());
          };
          imports.canonical_abi['resource_get_rb-iseq'] = i => {
              return this._resource0_slab.get(i)._wasm_val;
          };
          imports.canonical_abi['resource_new_rb-iseq'] = i => {
              this._registry0;
              return this._resource0_slab.insert(new RbIseq(i, this));
          };
          imports.canonical_abi['resource_drop_rb-abi-value'] = i => {
              this._resource1_slab.remove(i).drop();
          };
          imports.canonical_abi['resource_clone_rb-abi-value'] = i => {
              const obj = this._resource1_slab.get(i);
              return this._resource1_slab.insert(obj.clone());
          };
          imports.canonical_abi['resource_get_rb-abi-value'] = i => {
              return this._resource1_slab.get(i)._wasm_val;
          };
          imports.canonical_abi['resource_new_rb-abi-value'] = i => {
              this._registry1;
              return this._resource1_slab.insert(new RbAbiValue(i, this));
          };
      }
      async instantiate(module, imports) {
          imports = imports || {};
          this.addToImports(imports);
          if (module instanceof WebAssembly.Instance) {
              this.instance = module;
          }
          else if (module instanceof WebAssembly.Module) {
              this.instance = await WebAssembly.instantiate(module, imports);
          }
          else if (module instanceof ArrayBuffer || module instanceof Uint8Array) {
              const { instance } = await WebAssembly.instantiate(module, imports);
              this.instance = instance;
          }
          else {
              const { instance } = await WebAssembly.instantiateStreaming(module, imports);
              this.instance = instance;
          }
          this._exports = this.instance.exports;
          this._registry0 = new FinalizationRegistry(this._exports['canonical_abi_drop_rb-iseq']);
          this._registry1 = new FinalizationRegistry(this._exports['canonical_abi_drop_rb-abi-value']);
      }
      rubyShowVersion() {
          this._exports['ruby-show-version: func() -> ()']();
      }
      rubyInit() {
          this._exports['ruby-init: func() -> ()']();
      }
      rubySysinit(arg0) {
          const memory = this._exports.memory;
          const realloc = this._exports["cabi_realloc"];
          const vec1 = arg0;
          const len1 = vec1.length;
          const result1 = realloc(0, 0, 4, len1 * 8);
          for (let i = 0; i < vec1.length; i++) {
              const e = vec1[i];
              const base = result1 + i * 8;
              const ptr0 = utf8_encode(e, realloc, memory);
              const len0 = UTF8_ENCODED_LEN;
              data_view(memory).setInt32(base + 4, len0, true);
              data_view(memory).setInt32(base + 0, ptr0, true);
          }
          this._exports['ruby-sysinit: func(args: list<string>) -> ()'](result1, len1);
      }
      rubyOptions(arg0) {
          const memory = this._exports.memory;
          const realloc = this._exports["cabi_realloc"];
          const vec1 = arg0;
          const len1 = vec1.length;
          const result1 = realloc(0, 0, 4, len1 * 8);
          for (let i = 0; i < vec1.length; i++) {
              const e = vec1[i];
              const base = result1 + i * 8;
              const ptr0 = utf8_encode(e, realloc, memory);
              const len0 = UTF8_ENCODED_LEN;
              data_view(memory).setInt32(base + 4, len0, true);
              data_view(memory).setInt32(base + 0, ptr0, true);
          }
          const ret = this._exports['ruby-options: func(args: list<string>) -> handle<rb-iseq>'](result1, len1);
          return this._resource0_slab.remove(ret);
      }
      rubyScript(arg0) {
          const memory = this._exports.memory;
          const realloc = this._exports["cabi_realloc"];
          const ptr0 = utf8_encode(arg0, realloc, memory);
          const len0 = UTF8_ENCODED_LEN;
          this._exports['ruby-script: func(name: string) -> ()'](ptr0, len0);
      }
      rubyInitLoadpath() {
          this._exports['ruby-init-loadpath: func() -> ()']();
      }
      rbEvalStringProtect(arg0) {
          const memory = this._exports.memory;
          const realloc = this._exports["cabi_realloc"];
          const ptr0 = utf8_encode(arg0, realloc, memory);
          const len0 = UTF8_ENCODED_LEN;
          const ret = this._exports['rb-eval-string-protect: func(str: string) -> tuple<handle<rb-abi-value>, s32>'](ptr0, len0);
          return [this._resource1_slab.remove(data_view(memory).getInt32(ret + 0, true)), data_view(memory).getInt32(ret + 4, true)];
      }
      rbFuncallvProtect(arg0, arg1, arg2) {
          const memory = this._exports.memory;
          const realloc = this._exports["cabi_realloc"];
          const obj0 = arg0;
          if (!(obj0 instanceof RbAbiValue))
              throw new TypeError('expected instance of RbAbiValue');
          const vec2 = arg2;
          const len2 = vec2.length;
          const result2 = realloc(0, 0, 4, len2 * 4);
          for (let i = 0; i < vec2.length; i++) {
              const e = vec2[i];
              const base = result2 + i * 4;
              const obj1 = e;
              if (!(obj1 instanceof RbAbiValue))
                  throw new TypeError('expected instance of RbAbiValue');
              data_view(memory).setInt32(base + 0, this._resource1_slab.insert(obj1.clone()), true);
          }
          const ret = this._exports['rb-funcallv-protect: func(recv: handle<rb-abi-value>, mid: u32, args: list<handle<rb-abi-value>>) -> tuple<handle<rb-abi-value>, s32>'](this._resource1_slab.insert(obj0.clone()), to_uint32(arg1), result2, len2);
          return [this._resource1_slab.remove(data_view(memory).getInt32(ret + 0, true)), data_view(memory).getInt32(ret + 4, true)];
      }
      rbIntern(arg0) {
          const memory = this._exports.memory;
          const realloc = this._exports["cabi_realloc"];
          const ptr0 = utf8_encode(arg0, realloc, memory);
          const len0 = UTF8_ENCODED_LEN;
          const ret = this._exports['rb-intern: func(name: string) -> u32'](ptr0, len0);
          return ret >>> 0;
      }
      rbErrinfo() {
          const ret = this._exports['rb-errinfo: func() -> handle<rb-abi-value>']();
          return this._resource1_slab.remove(ret);
      }
      rbClearErrinfo() {
          this._exports['rb-clear-errinfo: func() -> ()']();
      }
      rstringPtr(arg0) {
          const memory = this._exports.memory;
          const obj0 = arg0;
          if (!(obj0 instanceof RbAbiValue))
              throw new TypeError('expected instance of RbAbiValue');
          const ret = this._exports['rstring-ptr: func(value: handle<rb-abi-value>) -> string'](this._resource1_slab.insert(obj0.clone()));
          const ptr1 = data_view(memory).getInt32(ret + 0, true);
          const len1 = data_view(memory).getInt32(ret + 4, true);
          const result1 = UTF8_DECODER.decode(new Uint8Array(memory.buffer, ptr1, len1));
          this._exports["cabi_post_rstring-ptr"](ret);
          return result1;
      }
      rbVmBugreport() {
          this._exports['rb-vm-bugreport: func() -> ()']();
      }
      rbGcEnable() {
          const ret = this._exports['rb-gc-enable: func() -> bool']();
          const bool0 = ret;
          return bool0 == 0 ? false : (bool0 == 1 ? true : throw_invalid_bool());
      }
      rbGcDisable() {
          const ret = this._exports['rb-gc-disable: func() -> bool']();
          const bool0 = ret;
          return bool0 == 0 ? false : (bool0 == 1 ? true : throw_invalid_bool());
      }
      rbSetShouldProhibitRewind(arg0) {
          const ret = this._exports['rb-set-should-prohibit-rewind: func(new-value: bool) -> bool'](arg0 ? 1 : 0);
          const bool0 = ret;
          return bool0 == 0 ? false : (bool0 == 1 ? true : throw_invalid_bool());
      }
  }
  class RbIseq {
      constructor(wasm_val, obj) {
          this._wasm_val = wasm_val;
          this._obj = obj;
          this._refcnt = 1;
          obj._registry0.register(this, wasm_val, this);
      }
      clone() {
          this._refcnt += 1;
          return this;
      }
      drop() {
          this._refcnt -= 1;
          if (this._refcnt !== 0)
              return;
          this._obj._registry0.unregister(this);
          const dtor = this._obj._exports['canonical_abi_drop_rb-iseq'];
          const wasm_val = this._wasm_val;
          delete this._obj;
          delete this._refcnt;
          delete this._wasm_val;
          dtor(wasm_val);
      }
  }
  class RbAbiValue {
      constructor(wasm_val, obj) {
          this._wasm_val = wasm_val;
          this._obj = obj;
          this._refcnt = 1;
          obj._registry1.register(this, wasm_val, this);
      }
      clone() {
          this._refcnt += 1;
          return this;
      }
      drop() {
          this._refcnt -= 1;
          if (this._refcnt !== 0)
              return;
          this._obj._registry1.unregister(this);
          const dtor = this._obj._exports['canonical_abi_drop_rb-abi-value'];
          const wasm_val = this._wasm_val;
          delete this._obj;
          delete this._refcnt;
          delete this._wasm_val;
          dtor(wasm_val);
      }
  }

  function addRbJsAbiHostToImports(imports, obj, get_export) {
      if (!("rb-js-abi-host" in imports))
          imports["rb-js-abi-host"] = {};
      imports["rb-js-abi-host"]["eval-js: func(code: string) -> variant { success(handle<js-abi-value>), failure(handle<js-abi-value>) }"] = function (arg0, arg1, arg2) {
          const memory = get_export("memory");
          const ptr0 = arg0;
          const len0 = arg1;
          const result0 = UTF8_DECODER.decode(new Uint8Array(memory.buffer, ptr0, len0));
          const ret0 = obj.evalJs(result0);
          const variant1 = ret0;
          switch (variant1.tag) {
              case "success": {
                  const e = variant1.val;
                  data_view(memory).setInt8(arg2 + 0, 0, true);
                  data_view(memory).setInt32(arg2 + 4, resources0.insert(e), true);
                  break;
              }
              case "failure": {
                  const e = variant1.val;
                  data_view(memory).setInt8(arg2 + 0, 1, true);
                  data_view(memory).setInt32(arg2 + 4, resources0.insert(e), true);
                  break;
              }
              default:
                  throw new RangeError("invalid variant specified for JsAbiResult");
          }
      };
      imports["rb-js-abi-host"]["is-js: func(value: handle<js-abi-value>) -> bool"] = function (arg0) {
          const ret0 = obj.isJs(resources0.get(arg0));
          return ret0 ? 1 : 0;
      };
      imports["rb-js-abi-host"]["instance-of: func(value: handle<js-abi-value>, klass: handle<js-abi-value>) -> bool"] = function (arg0, arg1) {
          const ret0 = obj.instanceOf(resources0.get(arg0), resources0.get(arg1));
          return ret0 ? 1 : 0;
      };
      imports["rb-js-abi-host"]["global-this: func() -> handle<js-abi-value>"] = function () {
          const ret0 = obj.globalThis();
          return resources0.insert(ret0);
      };
      imports["rb-js-abi-host"]["int-to-js-number: func(value: s32) -> handle<js-abi-value>"] = function (arg0) {
          const ret0 = obj.intToJsNumber(arg0);
          return resources0.insert(ret0);
      };
      imports["rb-js-abi-host"]["float-to-js-number: func(value: float64) -> handle<js-abi-value>"] = function (arg0) {
          const ret0 = obj.floatToJsNumber(arg0);
          return resources0.insert(ret0);
      };
      imports["rb-js-abi-host"]["string-to-js-string: func(value: string) -> handle<js-abi-value>"] = function (arg0, arg1) {
          const memory = get_export("memory");
          const ptr0 = arg0;
          const len0 = arg1;
          const result0 = UTF8_DECODER.decode(new Uint8Array(memory.buffer, ptr0, len0));
          const ret0 = obj.stringToJsString(result0);
          return resources0.insert(ret0);
      };
      imports["rb-js-abi-host"]["bool-to-js-bool: func(value: bool) -> handle<js-abi-value>"] = function (arg0) {
          const bool0 = arg0;
          const ret0 = obj.boolToJsBool(bool0 == 0 ? false : (bool0 == 1 ? true : throw_invalid_bool()));
          return resources0.insert(ret0);
      };
      imports["rb-js-abi-host"]["proc-to-js-function: func(value: u32) -> handle<js-abi-value>"] = function (arg0) {
          const ret0 = obj.procToJsFunction(arg0 >>> 0);
          return resources0.insert(ret0);
      };
      imports["rb-js-abi-host"]["rb-object-to-js-rb-value: func(raw-rb-abi-value: u32) -> handle<js-abi-value>"] = function (arg0) {
          const ret0 = obj.rbObjectToJsRbValue(arg0 >>> 0);
          return resources0.insert(ret0);
      };
      imports["rb-js-abi-host"]["js-value-to-string: func(value: handle<js-abi-value>) -> string"] = function (arg0, arg1) {
          const memory = get_export("memory");
          const realloc = get_export("cabi_realloc");
          const ret0 = obj.jsValueToString(resources0.get(arg0));
          const ptr0 = utf8_encode(ret0, realloc, memory);
          const len0 = UTF8_ENCODED_LEN;
          data_view(memory).setInt32(arg1 + 4, len0, true);
          data_view(memory).setInt32(arg1 + 0, ptr0, true);
      };
      imports["rb-js-abi-host"]["js-value-to-integer: func(value: handle<js-abi-value>) -> variant { f64(float64), bignum(string) }"] = function (arg0, arg1) {
          const memory = get_export("memory");
          const realloc = get_export("cabi_realloc");
          const ret0 = obj.jsValueToInteger(resources0.get(arg0));
          const variant1 = ret0;
          switch (variant1.tag) {
              case "f64": {
                  const e = variant1.val;
                  data_view(memory).setInt8(arg1 + 0, 0, true);
                  data_view(memory).setFloat64(arg1 + 8, +e, true);
                  break;
              }
              case "bignum": {
                  const e = variant1.val;
                  data_view(memory).setInt8(arg1 + 0, 1, true);
                  const ptr0 = utf8_encode(e, realloc, memory);
                  const len0 = UTF8_ENCODED_LEN;
                  data_view(memory).setInt32(arg1 + 12, len0, true);
                  data_view(memory).setInt32(arg1 + 8, ptr0, true);
                  break;
              }
              default:
                  throw new RangeError("invalid variant specified for RawInteger");
          }
      };
      imports["rb-js-abi-host"]["export-js-value-to-host: func(value: handle<js-abi-value>) -> ()"] = function (arg0) {
          obj.exportJsValueToHost(resources0.get(arg0));
      };
      imports["rb-js-abi-host"]["import-js-value-from-host: func() -> handle<js-abi-value>"] = function () {
          const ret0 = obj.importJsValueFromHost();
          return resources0.insert(ret0);
      };
      imports["rb-js-abi-host"]["js-value-typeof: func(value: handle<js-abi-value>) -> string"] = function (arg0, arg1) {
          const memory = get_export("memory");
          const realloc = get_export("cabi_realloc");
          const ret0 = obj.jsValueTypeof(resources0.get(arg0));
          const ptr0 = utf8_encode(ret0, realloc, memory);
          const len0 = UTF8_ENCODED_LEN;
          data_view(memory).setInt32(arg1 + 4, len0, true);
          data_view(memory).setInt32(arg1 + 0, ptr0, true);
      };
      imports["rb-js-abi-host"]["js-value-equal: func(lhs: handle<js-abi-value>, rhs: handle<js-abi-value>) -> bool"] = function (arg0, arg1) {
          const ret0 = obj.jsValueEqual(resources0.get(arg0), resources0.get(arg1));
          return ret0 ? 1 : 0;
      };
      imports["rb-js-abi-host"]["js-value-strictly-equal: func(lhs: handle<js-abi-value>, rhs: handle<js-abi-value>) -> bool"] = function (arg0, arg1) {
          const ret0 = obj.jsValueStrictlyEqual(resources0.get(arg0), resources0.get(arg1));
          return ret0 ? 1 : 0;
      };
      imports["rb-js-abi-host"]["reflect-apply: func(target: handle<js-abi-value>, this-argument: handle<js-abi-value>, arguments: list<handle<js-abi-value>>) -> variant { success(handle<js-abi-value>), failure(handle<js-abi-value>) }"] = function (arg0, arg1, arg2, arg3, arg4) {
          const memory = get_export("memory");
          const len0 = arg3;
          const base0 = arg2;
          const result0 = [];
          for (let i = 0; i < len0; i++) {
              const base = base0 + i * 4;
              result0.push(resources0.get(data_view(memory).getInt32(base + 0, true)));
          }
          const ret0 = obj.reflectApply(resources0.get(arg0), resources0.get(arg1), result0);
          const variant1 = ret0;
          switch (variant1.tag) {
              case "success": {
                  const e = variant1.val;
                  data_view(memory).setInt8(arg4 + 0, 0, true);
                  data_view(memory).setInt32(arg4 + 4, resources0.insert(e), true);
                  break;
              }
              case "failure": {
                  const e = variant1.val;
                  data_view(memory).setInt8(arg4 + 0, 1, true);
                  data_view(memory).setInt32(arg4 + 4, resources0.insert(e), true);
                  break;
              }
              default:
                  throw new RangeError("invalid variant specified for JsAbiResult");
          }
      };
      imports["rb-js-abi-host"]["reflect-construct: func(target: handle<js-abi-value>, arguments: list<handle<js-abi-value>>) -> handle<js-abi-value>"] = function (arg0, arg1, arg2) {
          const memory = get_export("memory");
          const len0 = arg2;
          const base0 = arg1;
          const result0 = [];
          for (let i = 0; i < len0; i++) {
              const base = base0 + i * 4;
              result0.push(resources0.get(data_view(memory).getInt32(base + 0, true)));
          }
          const ret0 = obj.reflectConstruct(resources0.get(arg0), result0);
          return resources0.insert(ret0);
      };
      imports["rb-js-abi-host"]["reflect-delete-property: func(target: handle<js-abi-value>, property-key: string) -> bool"] = function (arg0, arg1, arg2) {
          const memory = get_export("memory");
          const ptr0 = arg1;
          const len0 = arg2;
          const result0 = UTF8_DECODER.decode(new Uint8Array(memory.buffer, ptr0, len0));
          const ret0 = obj.reflectDeleteProperty(resources0.get(arg0), result0);
          return ret0 ? 1 : 0;
      };
      imports["rb-js-abi-host"]["reflect-get: func(target: handle<js-abi-value>, property-key: string) -> variant { success(handle<js-abi-value>), failure(handle<js-abi-value>) }"] = function (arg0, arg1, arg2, arg3) {
          const memory = get_export("memory");
          const ptr0 = arg1;
          const len0 = arg2;
          const result0 = UTF8_DECODER.decode(new Uint8Array(memory.buffer, ptr0, len0));
          const ret0 = obj.reflectGet(resources0.get(arg0), result0);
          const variant1 = ret0;
          switch (variant1.tag) {
              case "success": {
                  const e = variant1.val;
                  data_view(memory).setInt8(arg3 + 0, 0, true);
                  data_view(memory).setInt32(arg3 + 4, resources0.insert(e), true);
                  break;
              }
              case "failure": {
                  const e = variant1.val;
                  data_view(memory).setInt8(arg3 + 0, 1, true);
                  data_view(memory).setInt32(arg3 + 4, resources0.insert(e), true);
                  break;
              }
              default:
                  throw new RangeError("invalid variant specified for JsAbiResult");
          }
      };
      imports["rb-js-abi-host"]["reflect-get-own-property-descriptor: func(target: handle<js-abi-value>, property-key: string) -> handle<js-abi-value>"] = function (arg0, arg1, arg2) {
          const memory = get_export("memory");
          const ptr0 = arg1;
          const len0 = arg2;
          const result0 = UTF8_DECODER.decode(new Uint8Array(memory.buffer, ptr0, len0));
          const ret0 = obj.reflectGetOwnPropertyDescriptor(resources0.get(arg0), result0);
          return resources0.insert(ret0);
      };
      imports["rb-js-abi-host"]["reflect-get-prototype-of: func(target: handle<js-abi-value>) -> handle<js-abi-value>"] = function (arg0) {
          const ret0 = obj.reflectGetPrototypeOf(resources0.get(arg0));
          return resources0.insert(ret0);
      };
      imports["rb-js-abi-host"]["reflect-has: func(target: handle<js-abi-value>, property-key: string) -> bool"] = function (arg0, arg1, arg2) {
          const memory = get_export("memory");
          const ptr0 = arg1;
          const len0 = arg2;
          const result0 = UTF8_DECODER.decode(new Uint8Array(memory.buffer, ptr0, len0));
          const ret0 = obj.reflectHas(resources0.get(arg0), result0);
          return ret0 ? 1 : 0;
      };
      imports["rb-js-abi-host"]["reflect-is-extensible: func(target: handle<js-abi-value>) -> bool"] = function (arg0) {
          const ret0 = obj.reflectIsExtensible(resources0.get(arg0));
          return ret0 ? 1 : 0;
      };
      imports["rb-js-abi-host"]["reflect-own-keys: func(target: handle<js-abi-value>) -> list<handle<js-abi-value>>"] = function (arg0, arg1) {
          const memory = get_export("memory");
          const realloc = get_export("cabi_realloc");
          const ret0 = obj.reflectOwnKeys(resources0.get(arg0));
          const vec0 = ret0;
          const len0 = vec0.length;
          const result0 = realloc(0, 0, 4, len0 * 4);
          for (let i = 0; i < vec0.length; i++) {
              const e = vec0[i];
              const base = result0 + i * 4;
              data_view(memory).setInt32(base + 0, resources0.insert(e), true);
          }
          data_view(memory).setInt32(arg1 + 4, len0, true);
          data_view(memory).setInt32(arg1 + 0, result0, true);
      };
      imports["rb-js-abi-host"]["reflect-prevent-extensions: func(target: handle<js-abi-value>) -> bool"] = function (arg0) {
          const ret0 = obj.reflectPreventExtensions(resources0.get(arg0));
          return ret0 ? 1 : 0;
      };
      imports["rb-js-abi-host"]["reflect-set: func(target: handle<js-abi-value>, property-key: string, value: handle<js-abi-value>) -> variant { success(handle<js-abi-value>), failure(handle<js-abi-value>) }"] = function (arg0, arg1, arg2, arg3, arg4) {
          const memory = get_export("memory");
          const ptr0 = arg1;
          const len0 = arg2;
          const result0 = UTF8_DECODER.decode(new Uint8Array(memory.buffer, ptr0, len0));
          const ret0 = obj.reflectSet(resources0.get(arg0), result0, resources0.get(arg3));
          const variant1 = ret0;
          switch (variant1.tag) {
              case "success": {
                  const e = variant1.val;
                  data_view(memory).setInt8(arg4 + 0, 0, true);
                  data_view(memory).setInt32(arg4 + 4, resources0.insert(e), true);
                  break;
              }
              case "failure": {
                  const e = variant1.val;
                  data_view(memory).setInt8(arg4 + 0, 1, true);
                  data_view(memory).setInt32(arg4 + 4, resources0.insert(e), true);
                  break;
              }
              default:
                  throw new RangeError("invalid variant specified for JsAbiResult");
          }
      };
      imports["rb-js-abi-host"]["reflect-set-prototype-of: func(target: handle<js-abi-value>, prototype: handle<js-abi-value>) -> bool"] = function (arg0, arg1) {
          const ret0 = obj.reflectSetPrototypeOf(resources0.get(arg0), resources0.get(arg1));
          return ret0 ? 1 : 0;
      };
      if (!("canonical_abi" in imports))
          imports["canonical_abi"] = {};
      const resources0 = new Slab();
      imports.canonical_abi["resource_drop_js-abi-value"] = (i) => {
          const val = resources0.remove(i);
          if (obj.dropJsAbiValue)
              obj.dropJsAbiValue(val);
      };
  }

  /**
   * A Ruby VM instance
   *
   * @example
   *
   * const wasi = new WASI();
   * const vm = new RubyVM();
   * const imports = {
   *   wasi_snapshot_preview1: wasi.wasiImport,
   * };
   *
   * vm.addToImports(imports);
   *
   * const instance = await WebAssembly.instantiate(rubyModule, imports);
   * await vm.setInstance(instance);
   * wasi.initialize(instance);
   * vm.initialize();
   *
   */
  class RubyVM {
      constructor() {
          this.instance = null;
          this.interfaceState = {
              hasJSFrameAfterRbFrame: false,
          };
          // Wrap exported functions from Ruby VM to prohibit nested VM operation
          // if the call stack has sandwitched JS frames like JS -> Ruby -> JS -> Ruby.
          const proxyExports = (exports) => {
              const excludedMethods = [
                  "addToImports",
                  "instantiate",
                  "rbSetShouldProhibitRewind",
                  "rbGcDisable",
                  "rbGcEnable",
              ];
              const excluded = ["constructor"].concat(excludedMethods);
              // wrap all methods in RbAbi.RbAbiGuest class
              for (const key of Object.getOwnPropertyNames(RbAbiGuest.prototype)) {
                  if (excluded.includes(key)) {
                      continue;
                  }
                  const value = exports[key];
                  if (typeof value === "function") {
                      exports[key] = (...args) => {
                          const isNestedVMCall = this.interfaceState.hasJSFrameAfterRbFrame;
                          if (isNestedVMCall) {
                              const oldShouldProhibitRewind = this.guest.rbSetShouldProhibitRewind(true);
                              const oldIsDisabledGc = this.guest.rbGcDisable();
                              const result = Reflect.apply(value, exports, args);
                              this.guest.rbSetShouldProhibitRewind(oldShouldProhibitRewind);
                              if (!oldIsDisabledGc) {
                                  this.guest.rbGcEnable();
                              }
                              return result;
                          }
                          else {
                              return Reflect.apply(value, exports, args);
                          }
                      };
                  }
              }
              return exports;
          };
          this.guest = proxyExports(new RbAbiGuest());
          this.transport = new JsValueTransport();
          this.exceptionFormatter = new RbExceptionFormatter();
      }
      /**
       * Initialize the Ruby VM with the given command line arguments
       * @param args The command line arguments to pass to Ruby. Must be
       * an array of strings starting with the Ruby program name.
       */
      initialize(args = ["ruby.wasm", "-EUTF-8", "-e_=0"]) {
          console.log("tests");
            const c_args = args.map((arg) => arg + "\0");
          this.guest.rubyInit();
          this.guest.rubySysinit(c_args);
          this.guest.rubyOptions(c_args);
          this.eval(`require "/bundle/setup"`);
      }
      /**
       * Set a given instance to interact JavaScript and Ruby's
       * WebAssembly instance. This method must be called before calling
       * Ruby API.
       *
       * @param instance The WebAssembly instance to interact with. Must
       * be instantiated from a Ruby built with JS extension, and built
       * with Reactor ABI instead of command line.
       */
      async setInstance(instance) {
          this.instance = instance;
          await this.guest.instantiate(instance);
      }
      /**
       * Add intrinsic import entries, which is necessary to interact JavaScript
       * and Ruby's WebAssembly instance.
       * @param imports The import object to add to the WebAssembly instance
       */
      addToImports(imports) {
          this.guest.addToImports(imports);
          function wrapTry(f) {
              return (...args) => {
                  try {
                      return { tag: "success", val: f(...args) };
                  }
                  catch (e) {
                      if (e instanceof RbFatalError) {
                          // RbFatalError should not be caught by Ruby because it Ruby VM
                          // can be already in an inconsistent state.
                          throw e;
                      }
                      return { tag: "failure", val: e };
                  }
              };
          }
          imports["rb-js-abi-host"] = {
              rb_wasm_throw_prohibit_rewind_exception: (messagePtr, messageLen) => {
                  const memory = this.instance.exports.memory;
                  const str = new TextDecoder().decode(new Uint8Array(memory.buffer, messagePtr, messageLen));
                  throw new RbFatalError("Ruby APIs that may rewind the VM stack are prohibited under nested VM operation " +
                      `(${str})\n` +
                      "Nested VM operation means that the call stack has sandwitched JS frames like JS -> Ruby -> JS -> Ruby " +
                      "caused by something like `window.rubyVM.eval(\"JS.global[:rubyVM].eval('Fiber.yield')\")`\n" +
                      "\n" +
                      "Please check your call stack and make sure that you are **not** doing any of the following inside the nested Ruby frame:\n" +
                      "  1. Switching fibers (e.g. Fiber#resume, Fiber.yield, and Fiber#transfer)\n" +
                      "     Note that `evalAsync` JS API switches fibers internally\n" +
                      "  2. Raising uncaught exceptions\n" +
                      "     Please catch all exceptions inside the nested operation\n" +
                      "  3. Calling Continuation APIs\n");
              },
          };
          // NOTE: The GC may collect objects that are still referenced by Wasm
          // locals because Asyncify cannot scan the Wasm stack above the JS frame.
          // So we need to keep track whether the JS frame is sandwitched by Ruby
          // frames or not, and prohibit nested VM operation if it is.
          const proxyImports = (imports) => {
              for (const [key, value] of Object.entries(imports)) {
                  if (typeof value === "function") {
                      imports[key] = (...args) => {
                          const oldValue = this.interfaceState.hasJSFrameAfterRbFrame;
                          this.interfaceState.hasJSFrameAfterRbFrame = true;
                          const result = Reflect.apply(value, imports, args);
                          this.interfaceState.hasJSFrameAfterRbFrame = oldValue;
                          return result;
                      };
                  }
              }
              return imports;
          };
          addRbJsAbiHostToImports(imports, proxyImports({
              evalJs: wrapTry((code) => {
                  return Function(code)();
              }),
              isJs: (value) => {
                  // Just for compatibility with the old JS API
                  return true;
              },
              globalThis: () => {
                  if (typeof globalThis !== "undefined") {
                      return globalThis;
                  }
                  else if (typeof global !== "undefined") {
                      return global;
                  }
                  else if (typeof window !== "undefined") {
                      return window;
                  }
                  throw new Error("unable to locate global object");
              },
              intToJsNumber: (value) => {
                  return value;
              },
              floatToJsNumber: (value) => {
                  return value;
              },
              stringToJsString: (value) => {
                  return value;
              },
              boolToJsBool: (value) => {
                  return value;
              },
              procToJsFunction: (rawRbAbiValue) => {
                  const rbValue = this.rbValueOfPointer(rawRbAbiValue);
                  return (...args) => {
                      rbValue.call("call", ...args.map((arg) => this.wrap(arg)));
                  };
              },
              rbObjectToJsRbValue: (rawRbAbiValue) => {
                  return this.rbValueOfPointer(rawRbAbiValue);
              },
              jsValueToString: (value) => {
                  // According to the [spec](https://tc39.es/ecma262/multipage/text-processing.html#sec-string-constructor-string-value)
                  // `String(value)` always returns a string.
                  return String(value);
              },
              jsValueToInteger(value) {
                  if (typeof value === "number") {
                      return { tag: "f64", val: value };
                  }
                  else if (typeof value === "bigint") {
                      return { tag: "bignum", val: BigInt(value).toString(10) + "\0" };
                  }
                  else if (typeof value === "string") {
                      return { tag: "bignum", val: value + "\0" };
                  }
                  else if (typeof value === "undefined") {
                      return { tag: "f64", val: 0 };
                  }
                  else {
                      return { tag: "f64", val: Number(value) };
                  }
              },
              exportJsValueToHost: (value) => {
                  // See `JsValueExporter` for the reason why we need to do this
                  this.transport.takeJsValue(value);
              },
              importJsValueFromHost: () => {
                  return this.transport.consumeJsValue();
              },
              instanceOf: (value, klass) => {
                  if (typeof klass === "function") {
                      return value instanceof klass;
                  }
                  else {
                      return false;
                  }
              },
              jsValueTypeof(value) {
                  return typeof value;
              },
              jsValueEqual(lhs, rhs) {
                  return lhs == rhs;
              },
              jsValueStrictlyEqual(lhs, rhs) {
                  return lhs === rhs;
              },
              reflectApply: wrapTry((target, thisArgument, args) => {
                  return Reflect.apply(target, thisArgument, args);
              }),
              reflectConstruct: function (target, args) {
                  throw new Error("Function not implemented.");
              },
              reflectDeleteProperty: function (target, propertyKey) {
                  throw new Error("Function not implemented.");
              },
              reflectGet: wrapTry((target, propertyKey) => {
                  return target[propertyKey];
              }),
              reflectGetOwnPropertyDescriptor: function (target, propertyKey) {
                  throw new Error("Function not implemented.");
              },
              reflectGetPrototypeOf: function (target) {
                  throw new Error("Function not implemented.");
              },
              reflectHas: function (target, propertyKey) {
                  throw new Error("Function not implemented.");
              },
              reflectIsExtensible: function (target) {
                  throw new Error("Function not implemented.");
              },
              reflectOwnKeys: function (target) {
                  throw new Error("Function not implemented.");
              },
              reflectPreventExtensions: function (target) {
                  throw new Error("Function not implemented.");
              },
              reflectSet: wrapTry((target, propertyKey, value) => {
                  return Reflect.set(target, propertyKey, value);
              }),
              reflectSetPrototypeOf: function (target, prototype) {
                  throw new Error("Function not implemented.");
              },
          }), (name) => {
              return this.instance.exports[name];
          });
      }
      /**
       * Print the Ruby version to stdout
       */
      printVersion() {
          this.guest.rubyShowVersion();
      }
      /**
       * Runs a string of Ruby code from JavaScript
       * @param code The Ruby code to run
       * @returns the result of the last expression
       *
       * @example
       * vm.eval("puts 'hello world'");
       * const result = vm.eval("1 + 2");
       * console.log(result.toString()); // 3
       *
       */
      eval(code) {
          return evalRbCode(this, this.privateObject(), code);
      }
      /**
       * Runs a string of Ruby code with top-level `JS::Object#await`
       * Returns a promise that resolves when execution completes.
       * @param code The Ruby code to run
       * @returns a promise that resolves to the result of the last expression
       *
       * @example
       * const text = await vm.evalAsync(`
       *   require 'js'
       *   response = JS.global.fetch('https://example.com').await
       *   response.text.await
       * `);
       * console.log(text.toString()); // <html>...</html>
       */
      evalAsync(code) {
          const JS = this.eval("require 'js'; JS");
          return newRbPromise(this, this.privateObject(), (future) => {
              JS.call("__eval_async_rb", this.wrap(code), future);
          });
      }
      /**
       * Wrap a JavaScript value into a Ruby JS::Object
       * @param value The value to convert to RbValue
       * @returns the RbValue object representing the given JS value
       *
       * @example
       * const hash = vm.eval(`Hash.new`)
       * hash.call("store", vm.eval(`"key1"`), vm.wrap(new Object()));
       */
      wrap(value) {
          return this.transport.importJsValue(value, this);
      }
      /** @private */
      privateObject() {
          return {
              transport: this.transport,
              exceptionFormatter: this.exceptionFormatter,
          };
      }
      /** @private */
      rbValueOfPointer(pointer) {
          const abiValue = new RbAbiValue(pointer, this.guest);
          return new RbValue(abiValue, this, this.privateObject());
      }
  }
  /**
   * Export a JS value held by the Ruby VM to the JS environment.
   * This is implemented in a dirty way since wit cannot reference resources
   * defined in other interfaces.
   * In our case, we can't express `function(v: rb-abi-value) -> js-abi-value`
   * because `rb-js-abi-host.wit`, that defines `js-abi-value`, is implemented
   * by embedder side (JS) but `rb-abi-guest.wit`, that defines `rb-abi-value`
   * is implemented by guest side (Wasm).
   *
   * This class is a helper to export by:
   * 1. Call `function __export_to_js(v: rb-abi-value)` defined in guest from embedder side.
   * 2. Call `function takeJsValue(v: js-abi-value)` defined in embedder from guest side with
   *    underlying JS value of given `rb-abi-value`.
   * 3. Then `takeJsValue` implementation escapes the given JS value to the `_takenJsValues`
   *    stored in embedder side.
   * 4. Finally, embedder side can take `_takenJsValues`.
   *
   * Note that `exportJsValue` is not reentrant.
   *
   * @private
   */
  class JsValueTransport {
      constructor() {
          this._takenJsValue = null;
      }
      takeJsValue(value) {
          this._takenJsValue = value;
      }
      consumeJsValue() {
          return this._takenJsValue;
      }
      exportJsValue(value) {
          value.call("__export_to_js");
          return this._takenJsValue;
      }
      importJsValue(value, vm) {
          this._takenJsValue = value;
          return vm.eval('require "js"; JS::Object').call("__import_from_js");
      }
  }
  /**
   * A RbValue is an object that represents a value in Ruby
   */
  class RbValue {
      /**
       * @hideconstructor
       */
      constructor(inner, vm, privateObject) {
          this.inner = inner;
          this.vm = vm;
          this.privateObject = privateObject;
      }
      /**
       * Call a given method with given arguments
       *
       * @param callee name of the Ruby method to call
       * @param args arguments to pass to the method. Must be an array of RbValue
       * @returns The result of the method call as a new RbValue.
       *
       * @example
       * const ary = vm.eval("[1, 2, 3]");
       * ary.call("push", 4);
       * console.log(ary.call("sample").toString());
       */
      call(callee, ...args) {
          const innerArgs = args.map((arg) => arg.inner);
          return new RbValue(callRbMethod(this.vm, this.privateObject, this.inner, callee, innerArgs), this.vm, this.privateObject);
      }
      /**
       * Call a given method that may call `JS::Object#await` with given arguments
       *
       * @param callee name of the Ruby method to call
       * @param args arguments to pass to the method. Must be an array of RbValue
       * @returns A Promise that resolves to the result of the method call as a new RbValue.
       *
       * @example
       * const client = vm.eval(`
       *   require 'js'
       *   class HttpClient
       *     def get(url)
       *       JS.global.fetch(url).await
       *     end
       *   end
       *   HttpClient.new
       * `);
       * const response = await client.callAsync("get", vm.eval(`"https://example.com"`));
       */
      callAsync(callee, ...args) {
          const JS = this.vm.eval("require 'js'; JS");
          return newRbPromise(this.vm, this.privateObject, (future) => {
              JS.call("__call_async_method", this, this.vm.wrap(callee), future, ...args);
          });
      }
      /**
       * @see {@link https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive}
       * @param hint Preferred type of the result primitive value. `"number"`, `"string"`, or `"default"`.
       */
      [Symbol.toPrimitive](hint) {
          if (hint === "string" || hint === "default") {
              return this.toString();
          }
          else if (hint === "number") {
              return null;
          }
          return null;
      }
      /**
       * Returns a string representation of the value by calling `to_s`
       */
      toString() {
          const rbString = callRbMethod(this.vm, this.privateObject, this.inner, "to_s", []);
          return this.vm.guest.rstringPtr(rbString);
      }
      /**
       * Returns a JavaScript object representation of the value
       * by calling `to_js`.
       *
       * Returns null if the value is not convertible to a JavaScript object.
       */
      toJS() {
          const JS = this.vm.eval("JS");
          const jsValue = JS.call("try_convert", this);
          if (jsValue.call("nil?").toString() === "true") {
              return null;
          }
          return this.privateObject.transport.exportJsValue(jsValue);
      }
  }
  var ruby_tag_type;
  (function (ruby_tag_type) {
      ruby_tag_type[ruby_tag_type["None"] = 0] = "None";
      ruby_tag_type[ruby_tag_type["Return"] = 1] = "Return";
      ruby_tag_type[ruby_tag_type["Break"] = 2] = "Break";
      ruby_tag_type[ruby_tag_type["Next"] = 3] = "Next";
      ruby_tag_type[ruby_tag_type["Retry"] = 4] = "Retry";
      ruby_tag_type[ruby_tag_type["Redo"] = 5] = "Redo";
      ruby_tag_type[ruby_tag_type["Raise"] = 6] = "Raise";
      ruby_tag_type[ruby_tag_type["Throw"] = 7] = "Throw";
      ruby_tag_type[ruby_tag_type["Fatal"] = 8] = "Fatal";
      ruby_tag_type[ruby_tag_type["Mask"] = 15] = "Mask";
  })(ruby_tag_type || (ruby_tag_type = {}));
  class RbExceptionFormatter {
      constructor() {
          this.literalsCache = null;
          this.isFormmatting = false;
      }
      format(error, vm, privateObject) {
          // All Ruby exceptions raised during formatting exception message should
          // be caught and return a fallback message.
          // Therefore, we don't need to worry about infinite recursion here ideally
          // but checking re-entrancy just in case.
          class RbExceptionFormatterError extends Error {
          }
          if (this.isFormmatting) {
              throw new RbExceptionFormatterError("Unexpected exception occurred during formatting exception message");
          }
          this.isFormmatting = true;
          try {
              return this._format(error, vm, privateObject);
          }
          finally {
              this.isFormmatting = false;
          }
      }
      _format(error, vm, privateObject) {
          const [zeroLiteral, oneLiteral, newLineLiteral] = (() => {
              if (this.literalsCache == null) {
                  const zeroOneNewLine = [
                      evalRbCode(vm, privateObject, "0"),
                      evalRbCode(vm, privateObject, "1"),
                      evalRbCode(vm, privateObject, `"\n"`),
                  ];
                  this.literalsCache = zeroOneNewLine;
                  return zeroOneNewLine;
              }
              else {
                  return this.literalsCache;
              }
          })();
          let className;
          let backtrace;
          let message;
          try {
              className = error.call("class").toString();
          }
          catch (e) {
              className = "unknown";
          }
          try {
              message = error.toString();
          }
          catch (e) {
              message = "unknown";
          }
          try {
              backtrace = error.call("backtrace");
          }
          catch (e) {
              return this.formatString(className, message);
          }
          if (backtrace.call("nil?").toString() === "true") {
              return this.formatString(className, message);
          }
          try {
              const firstLine = backtrace.call("at", zeroLiteral);
              const restLines = backtrace
                  .call("drop", oneLiteral)
                  .call("join", newLineLiteral);
              return this.formatString(className, message, [
                  firstLine.toString(),
                  restLines.toString(),
              ]);
          }
          catch (e) {
              return this.formatString(className, message);
          }
      }
      formatString(klass, message, backtrace) {
          if (backtrace) {
              return `${backtrace[0]}: ${message} (${klass})\n${backtrace[1]}`;
          }
          else {
              return `${klass}: ${message}`;
          }
      }
  }
  const checkStatusTag = (rawTag, vm, privateObject) => {
      switch (rawTag & ruby_tag_type.Mask) {
          case ruby_tag_type.None:
              break;
          case ruby_tag_type.Return:
              throw new RbError("unexpected return");
          case ruby_tag_type.Next:
              throw new RbError("unexpected next");
          case ruby_tag_type.Break:
              throw new RbError("unexpected break");
          case ruby_tag_type.Redo:
              throw new RbError("unexpected redo");
          case ruby_tag_type.Retry:
              throw new RbError("retry outside of rescue clause");
          case ruby_tag_type.Throw:
              throw new RbError("unexpected throw");
          case ruby_tag_type.Raise:
          case ruby_tag_type.Fatal:
              const error = new RbValue(vm.guest.rbErrinfo(), vm, privateObject);
              if (error.call("nil?").toString() === "true") {
                  throw new RbError("no exception object");
              }
              // clear errinfo if got exception due to no rb_jump_tag
              vm.guest.rbClearErrinfo();
              throw new RbError(privateObject.exceptionFormatter.format(error, vm, privateObject));
          default:
              throw new RbError(`unknown error tag: ${rawTag}`);
      }
  };
  function wrapRbOperation(vm, body) {
      try {
          return body();
      }
      catch (e) {
          if (e instanceof RbError) {
              throw e;
          }
          // All JS exceptions triggered by Ruby code are translated to Ruby exceptions,
          // so non-RbError exceptions are unexpected.
          vm.guest.rbVmBugreport();
          if (e instanceof WebAssembly.RuntimeError && e.message === "unreachable") {
              const error = new RbError(`Something went wrong in Ruby VM: ${e}`);
              error.stack = e.stack;
              throw error;
          }
          else {
              throw e;
          }
      }
  }
  const callRbMethod = (vm, privateObject, recv, callee, args) => {
      const mid = vm.guest.rbIntern(callee + "\0");
      return wrapRbOperation(vm, () => {
          const [value, status] = vm.guest.rbFuncallvProtect(recv, mid, args);
          checkStatusTag(status, vm, privateObject);
          return value;
      });
  };
  const evalRbCode = (vm, privateObject, code) => {
      return wrapRbOperation(vm, () => {
          const [value, status] = vm.guest.rbEvalStringProtect(code + "\0");
          checkStatusTag(status, vm, privateObject);
          return new RbValue(value, vm, privateObject);
      });
  };
  function newRbPromise(vm, privateObject, body) {
      return new Promise((resolve, reject) => {
          const future = vm.wrap({
              resolve,
              reject: (error) => {
                  const rbError = new RbError(privateObject.exceptionFormatter.format(error, vm, privateObject));
                  reject(rbError);
              },
          });
          body(future);
      });
  }
  /**
   * Error class thrown by Ruby execution
   */
  class RbError extends Error {
      /**
       * @hideconstructor
       */
      constructor(message) {
          super(message);
      }
  }
  /**
   * Error class thrown by Ruby execution when it is not possible to recover.
   * This is usually caused when Ruby VM is in an inconsistent state.
   */
  class RbFatalError extends RbError {
      /**
       * @hideconstructor
       */
      constructor(message) {
          super("Ruby Fatal Error: " + message);
      }
  }

  const DefaultRubyVM = async (rubyModule, options = {}) => {
      var _a, _b;
      const args = [];
      const env = Object.entries((_a = options.env) !== null && _a !== void 0 ? _a : {}).map(([k, v]) => `${k}=${v}`);
      const fds = [];
      const wasi = new WASI(args, env, fds, { debug: false });
      const vm = new RubyVM();
      const imports = {
          wasi_snapshot_preview1: wasi.wasiImport,
      };
      vm.addToImports(imports);
      const printer = ((_b = options.consolePrint) !== null && _b !== void 0 ? _b : true) ? consolePrinter() : undefined;
      printer === null || printer === void 0 ? void 0 : printer.addToImports(imports);
      const instance = await WebAssembly.instantiate(rubyModule, imports);
      await vm.setInstance(instance);
      printer === null || printer === void 0 ? void 0 : printer.setMemory(instance.exports.memory);
      wasi.initialize(instance);
      vm.initialize();
      return {
          vm,
          wasi,
          instance,
      };
  };

  const main$1 = async (pkg, options) => {
      const response = fetch(`ruby-app.wasm`);
      const module = await compileWebAssemblyModule(response);
      const { vm } = await DefaultRubyVM(module, options);
      vm.printVersion();
      globalThis.rubyVM = vm;
      // Wait for the text/ruby script tag to be read.
      // It may take some time to read ruby+stdlib.wasm
      // and DOMContentLoaded has already been fired.
      if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", () => runRubyScriptsInHtml(vm));
      }
      else {
          runRubyScriptsInHtml(vm);
      }
  };
  const runRubyScriptsInHtml = async (vm) => {
      var _a, e_1, _b, _c;
      const tags = document.querySelectorAll('script[type="text/ruby"]');
      // Get Ruby scripts in parallel.
      const promisingRubyScripts = Array.from(tags).map((tag) => loadScriptAsync(tag));
      try {
          // Run Ruby scripts sequentially.
          for (var _d = true, promisingRubyScripts_1 = __asyncValues(promisingRubyScripts), promisingRubyScripts_1_1; promisingRubyScripts_1_1 = await promisingRubyScripts_1.next(), _a = promisingRubyScripts_1_1.done, !_a; _d = true) {
              _c = promisingRubyScripts_1_1.value;
              _d = false;
              const script = _c;
              if (script) {
                  const { scriptContent, evalStyle } = script;
                  switch (evalStyle) {
                      case "async":
                          vm.evalAsync(scriptContent);
                          break;
                      case "sync":
                          vm.eval(scriptContent);
                          break;
                  }
              }
          }
      }
      catch (e_1_1) { e_1 = { error: e_1_1 }; }
      finally {
          try {
              if (!_d && !_a && (_b = promisingRubyScripts_1.return)) await _b.call(promisingRubyScripts_1);
          }
          finally { if (e_1) throw e_1.error; }
      }
  };
  const deriveEvalStyle = (tag) => {
      const rawEvalStyle = tag.getAttribute("data-eval") || "sync";
      if (rawEvalStyle !== "async" && rawEvalStyle !== "sync") {
          console.warn(`data-eval attribute of script tag must be "async" or "sync". ${rawEvalStyle} is ignored and "sync" is used instead.`);
          return "sync";
      }
      return rawEvalStyle;
  };
  const loadScriptAsync = async (tag) => {
      const evalStyle = deriveEvalStyle(tag);
      // Inline comments can be written with the src attribute of the script tag.
      // The presence of the src attribute is checked before the presence of the inline.
      // see: https://html.spec.whatwg.org/multipage/scripting.html#inline-documentation-for-external-scripts
      if (tag.hasAttribute("src")) {
          const url = tag.getAttribute("src");
          const response = await fetch(url);
          if (response.ok) {
              return { scriptContent: await response.text(), evalStyle };
          }
          return Promise.resolve(null);
      }
      return Promise.resolve({ scriptContent: tag.innerHTML, evalStyle });
  };
  // WebAssembly.compileStreaming is a relatively new API.
  // For example, it is not available in iOS Safari 14,
  // so check whether WebAssembly.compileStreaming is available and
  // fall back to the existing implementation using WebAssembly.compile if not.
  const compileWebAssemblyModule = async function (response) {
      if (!WebAssembly.compileStreaming) {
          const buffer = await (await response).arrayBuffer();
          return WebAssembly.compile(buffer);
      }
      else {
          return WebAssembly.compileStreaming(response);
      }
  };

  var name = "@ruby/3.3-wasm-wasi";
  var version = "2.5.0";
  var description = "Ruby 3.3 built on WASI";
  var main = "./dist/cjs/index.js";
  var module = "./dist/esm/index.js";
  var exports$1 = {
  	".": {
  		browser: "./dist/esm/index.js",
  		umd: "./dist/umd/index.js",
  		"import": "./dist/esm/index.js",
  		require: "./dist/cjs/index.js"
  	},
  	"./dist/*": {
  		browser: "./dist/esm/*.js",
  		umd: "./dist/umd/*.js",
  		"import": "./dist/esm/*.js",
  		require: "./dist/cjs/*.js"
  	},
  	"./*.wasm": {
  		browser: "./*.wasm",
  		umd: "./*.wasm",
  		"import": "./*.wasm",
  		require: "./*.wasm"
  	}
  };
  var files = [
  	"dist",
  	"README.md"
  ];
  var scripts = {
  	test: "RUBY_NPM_PACKAGE_ROOT=../ruby-3.3-wasm-wasi npm -C ../ruby-wasm-wasi run test:run",
  	"build:deps": "cd ../ruby-wasm-wasi && npm run build",
  	"build:static:files": "../ruby-wasm-wasi/tools/pack-static-files.sh ./dist",
  	"build:static:compat": "../ruby-wasm-wasi/tools/pack-compat-shim.mjs --dist=./dist --pkg=ruby-3.3-wasm-wasi",
  	"build:static": "npm run build:static:files && npm run build:static:compat",
  	"build:rollup": "rollup -c rollup.config.mjs",
  	build: "npm run build:deps && npm run build:static && npm run build:rollup && ../ruby-wasm-wasi/tools/post-build.sh ./dist"
  };
  var repository = "https://github.com/ruby/ruby.wasm";
  var homepage = "https://github.com/ruby/ruby.wasm/tree/main/packages/npm-packages/ruby-3.3-wasm-wasi";
  var publishConfig = {
  	access: "public"
  };
  var keywords = [
  	"wasm",
  	"webassembly",
  	"wasi",
  	"ruby"
  ];
  var license = "MIT";
  var dependencies = {
  	"@ruby/wasm-wasi": "^2.0.0"
  };
  var _package = {
  	name: name,
  	version: version,
  	description: description,
  	main: main,
  	module: module,
  	exports: exports$1,
  	files: files,
  	scripts: scripts,
  	repository: repository,
  	homepage: homepage,
  	publishConfig: publishConfig,
  	keywords: keywords,
  	license: license,
  	dependencies: dependencies
  };

  var pkg = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: _package,
    dependencies: dependencies,
    description: description,
    exports: exports$1,
    files: files,
    homepage: homepage,
    keywords: keywords,
    license: license,
    main: main,
    module: module,
    name: name,
    publishConfig: publishConfig,
    repository: repository,
    scripts: scripts,
    version: version
  });

  main$1(pkg);

})();
